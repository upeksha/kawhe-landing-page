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

export interface PostCategory {
  name: string;
  slug: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  categories?: {
    nodes: PostCategory[];
  };
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

/** Slug for the FAQ category – posts in this category are excluded from the blog. */
const FAQ_CATEGORY_SLUG = "faq";

async function getCategoryIdBySlug(slug: string): Promise<number | null> {
  const data = await fetchAPI(
    `
    query GetCategoryBySlug($id: ID!) {
      category(id: $id, idType: SLUG) {
        databaseId
      }
    }
  `,
    { variables: { id: slug } },
    { revalidate: 60 }
  );
  const id = data?.category?.databaseId;
  return id != null ? Number(id) : null;
}

const POST_LIST_FIELDS = `
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
`;

const POST_LIST_FIELDS_WITH_CATEGORIES = `
  id
  title
  slug
  excerpt
  date
  categories(first: 10) {
    nodes {
      slug
    }
  }
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
`;

/** Exclude posts that are in the FAQ category (client-side so blog works regardless of API support). */
function excludeFaqPosts<T extends { categories?: { nodes?: { slug: string }[] } }>(posts: T[]): T[] {
  return posts.filter(
    (post) => !post.categories?.nodes?.some((c) => c.slug?.toLowerCase() === FAQ_CATEGORY_SLUG)
  );
}

export async function getAllPosts() {
  // Fetch with categories so we can exclude FAQ posts client-side
  const data = await fetchAPI(
    `query GetAllPosts {
      posts(first: 50, where: { orderby: { field: DATE, order: DESC } }) {
        nodes { ${POST_LIST_FIELDS_WITH_CATEGORIES} }
      }
    }`,
    {},
    { revalidate: 60 }
  );

  let nodes = data?.posts?.nodes ?? [];

  // If query failed, retry without categories (e.g. schema doesn't support categories on Post)
  if (nodes.length === 0 && !data?.posts) {
    const fallback = await fetchAPI(
      `query GetAllPostsFallback {
        posts(first: 50, where: { orderby: { field: DATE, order: DESC } }) {
          nodes { ${POST_LIST_FIELDS} }
        }
      }`,
      {},
      { revalidate: 60 }
    );
    nodes = fallback?.posts?.nodes ?? [];
    return nodes;
  }

  const filtered = excludeFaqPosts(nodes);
  return filtered.slice(0, 20);
}

/** Shape for FAQ items: posts in the "faq" category (title = question, content = answer) */
export interface FaqPost {
  id: string;
  title: string;
  content: string;
}

export async function getPostsByCategoryName(categoryName: string): Promise<FaqPost[]> {
  // Try filtering by categoryName first (common in WPGraphQL)
  let data = await fetchAPI(
    `
    query GetPostsByCategory($categoryName: String!) {
      posts(first: 50, where: { categoryName: $categoryName, orderby: { field: DATE, order: ASC } }) {
        nodes {
          id
          title
          content
        }
      }
    }
  `,
    { variables: { categoryName } },
    { revalidate: 60 }
  );
  let nodes = data?.posts?.nodes ?? [];

  // Fallback: some WPGraphQL setups use categoryId; resolve category by slug then query posts
  if (nodes.length === 0) {
    const catData = await fetchAPI(
      `
      query GetCategoryBySlug($id: ID!) {
        category(id: $id, idType: SLUG) {
          databaseId
        }
      }
    `,
      { variables: { id: categoryName } },
      { revalidate: 60 }
    );
    const categoryId = catData?.category?.databaseId;
    if (categoryId != null) {
      const postData = await fetchAPI(
        `
        query GetPostsByCategoryId($categoryId: Int!) {
          posts(first: 50, where: { categoryId: $categoryId, orderby: { field: DATE, order: ASC } }) {
            nodes {
              id
              title
              content
            }
          }
        }
      `,
        { variables: { categoryId } },
        { revalidate: 60 }
      );
      nodes = postData?.posts?.nodes ?? [];
    }
  }

  return nodes.map((n: { id: string; title: string; content: string }) => ({
    id: n.id,
    title: n.title,
    content: n.content ?? "",
  }));
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
  /** Last modified date (prefer over date for "Last updated") */
  modified?: string;
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
          modified
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
          modified
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
