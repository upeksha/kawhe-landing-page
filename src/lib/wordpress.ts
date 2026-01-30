const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "https://your-wordpress-site.com/graphql";

export async function fetchAPI(query: string, { variables }: { variables?: any } = {}) {
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

export async function getNavLinks() {
  const data = await fetchAPI(`
    query GetMenu {
      menuItems(where: {location: PRIMARY}) {
        nodes {
          label
          path
        }
      }
    }
  `);
  return data?.menuItems?.nodes || [];
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
