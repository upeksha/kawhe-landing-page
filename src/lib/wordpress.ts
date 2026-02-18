const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "https://cms.kawhe.shop/graphql";
const MENU_LOCATION = process.env.NEXT_PUBLIC_WORDPRESS_MENU_LOCATION || "MENU_1";

export async function fetchAPI(
  query: string,
  { variables }: { variables?: Record<string, unknown> } = {},
  options?: { revalidate?: number }
) {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      next: options?.revalidate !== undefined ? { revalidate: options.revalidate } : undefined,
    });

    const json = await res.json();
    if (json.errors) {
      console.warn("GraphQL errors returned from WordPress:", json.errors);
      // Return data even if there are errors, as some fields might still have resolved
      return json.data;
    }
    return json.data;
  } catch (error) {
    console.error("Network error while fetching from WordPress:", error);
    return null;
  }
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  author: {
    node: {
      name: string;
      avatar?: {
        url: string;
      };
    };
  };
  content?: string;
}

export interface NavLink {
  label: string;
  path: string;
}

/** Menu item shape returned by WPGraphQL */
interface WordPressMenuItem {
  label?: string | null;
  url?: string | null;
  path?: string | null;
  title?: string | null;
}

export async function getNavLinks(): Promise<NavLink[]> {
  const data = await fetchAPI(
    `
    query GetMenu($location: MenuLocationEnum!) {
      menuItems(where: { location: $location }, first: 50) {
        nodes {
          label
          url
          path
        }
      }
    }
  `,
    { variables: { location: MENU_LOCATION } },
    { revalidate: 60 }
  );

  const nodes = (data?.menuItems?.nodes ?? []) as WordPressMenuItem[];
  return nodes
    .filter((node) => node?.label != null)
    .map((node) => ({
      label: String(node.label ?? node.title ?? ""),
      path: String(node.url ?? node.path ?? "#"),
    }));
}

export async function getAllPosts() {
  const data = await fetchAPI(`
    query GetAllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          id
          title
          slug
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          author {
            node {
              name
              avatar {
                url
              }
            }
          }
        }
      }
    }
  `);
  return data?.posts?.nodes || [];
}

export async function getPostBySlug(slug: string) {
  const data = await fetchAPI(`
    query GetPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        id
        title
        content
        slug
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
      }
    }
  `, {
    variables: {
      id: slug,
      idType: "SLUG",
    },
  });
  return data?.post;
}

/** WordPress page (e.g. Privacy Policy, Terms of Service) */
export interface WpPage {
  id: string;
  title: string;
  slug: string;
  content: string;
  date?: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
}

export async function getAllPages(): Promise<WpPage[]> {
  const data = await fetchAPI(
    `
    query GetAllPages {
      pages(first: 100, where: { status: PUBLISH }) {
        nodes {
          id
          title
          slug
          content
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  `,
    {},
    { revalidate: 60 }
  );
  return data?.pages?.nodes ?? [];
}

/**
 * Fetches a single WordPress page by slug or URI.
 * Tries URI first (required by WPGraphQL PageIdType when using index.php permalinks).
 */
export async function getPageBySlug(slug: string): Promise<WpPage | null> {
  // WPGraphQL page query uses PageIdType: DATABASE_ID, ID, URI (no SLUG).
  // Try URI variants common with index.php permalinks.
  const uriCandidates = [
    `/${slug}`,
    slug,
    `index.php/${slug}`,
    `index.php/${slug}/`,
  ];

  for (const uri of uriCandidates) {
    const data = await fetchAPI(
      `
      query GetPage($id: ID!, $idType: PageIdType!) {
        page(id: $id, idType: $idType) {
          id
          title
          slug
          content
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    `,
      {
        variables: {
          id: uri,
          idType: "URI",
        },
      },
      { revalidate: 60 }
    );
    if (data?.page) return data.page;
  }

  return null;
}
