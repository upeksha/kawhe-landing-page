import { Container } from "@/components/ui/container";
import { getPostBySlug, Post } from "@/lib/wordpress";
import Image from "next/image";
import { notFound } from "next/navigation";

export const revalidate = 60;

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    let post: Post | null = null;
    let error = false;

    try {
        post = await getPostBySlug(slug);
    } catch (e) {
        console.error("Error fetching post:", e);
        error = true;
    }

    if (!post && !error) {
        notFound();
    }

    return (
        <main className="py-24">
            <Container>
                {error || !post ? (
                    <div className="max-w-3xl mx-auto bg-white rounded-3xl p-12 text-center border border-cocoa/10 shadow-sm">
                        <h2 className="text-xl font-bold mb-4">Post Connection Pending</h2>
                        <p className="text-espresso/60">
                            This page is ready to render your WordPress content! Once the API is connected, the full post will appear here.
                        </p>
                    </div>
                ) : (
                    <article className="max-w-3xl mx-auto">
                        <header className="mb-12">
                            <div className="flex items-center gap-4 text-sm font-medium text-forest mb-6">
                                <span>{new Date(post.date).toLocaleDateString("en-NZ", { dateStyle: 'full' })}</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
                                {post.title}
                            </h1>
                            <div className="flex items-center gap-4 py-6 border-y border-cocoa/5">
                                {post.author.node.avatar && (
                                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                                        <Image
                                            src={post.author.node.avatar.url}
                                            alt={post.author.node.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                                <div>
                                    <div className="text-sm font-bold">{post.author.node.name}</div>
                                    <div className="text-xs text-espresso/50">Author</div>
                                </div>
                            </div>
                        </header>

                        {post.featuredImage && (
                            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden mb-12 shadow-lg border border-cocoa/5">
                                <Image
                                    src={post.featuredImage.node.sourceUrl}
                                    alt={post.featuredImage.node.altText || post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}

                        <div
                            className="prose prose-lg prose-stone max-w-none 
                            prose-headings:text-espresso prose-headings:font-bold
                            prose-p:text-espresso/80 prose-p:leading-relaxed
                            prose-a:text-forest prose-a:no-underline hover:prose-a:underline
                            prose-strong:text-espresso prose-img:rounded-3xl prose-img:shadow-md"
                            dangerouslySetInnerHTML={{ __html: post.content || "" }}
                        />
                    </article>
                )}
            </Container>
        </main>
    );
}
