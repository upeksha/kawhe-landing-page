import { Container } from "@/components/ui/container";
import { getPageBySlug, getAllPages, type WpPage } from "@/lib/wordpress";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPageBySlug(slug);
  if (!page) return { title: "Page not found" };
  return { title: `${page.title} | Kawhe` };
}

/** Reserved paths that are handled by other routes (e.g. /blog) */
const RESERVED_SLUGS = ["blog", "demo", "signup"];

export async function generateStaticParams() {
  const pages = await getAllPages();
  return pages
    .filter((p) => p.slug && !RESERVED_SLUGS.includes(p.slug))
    .map((p) => ({ slug: p.slug }));
}

export default async function WordPressPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (RESERVED_SLUGS.includes(slug)) {
    notFound();
  }

  let page: WpPage | null = null;
  try {
    page = await getPageBySlug(slug);
  } catch (e) {
    console.error("Error fetching WordPress page:", e);
  }

  if (!page) {
    notFound();
  }

  return (
    <main className="py-24">
      <Container>
        <article className="max-w-3xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              {page.title}
            </h1>
            {page.date && (
              <p className="text-sm text-espresso/60">
                Last updated{" "}
                {new Date(page.date).toLocaleDateString("en-NZ", {
                  dateStyle: "long",
                })}
              </p>
            )}
          </header>

          {page.featuredImage && (
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden mb-12 shadow-lg border border-cocoa/5">
              <Image
                src={page.featuredImage.node.sourceUrl}
                alt={page.featuredImage.node.altText || page.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div
            className="blog-content text-base"
            dangerouslySetInnerHTML={{ __html: page.content || "" }}
          />
        </article>
      </Container>
    </main>
  );
}
