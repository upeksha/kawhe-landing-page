import { Container } from "@/components/ui/container";
import { getAllPosts, Post } from "@/lib/wordpress";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 60; // Revalidate every minute

export default async function BlogPage() {
    let posts: Post[] = [];
    let error = false;

    try {
        posts = await getAllPosts();
    } catch (e) {
        console.error("Error fetching posts:", e);
        error = true;
    }

    return (
        <main className="py-24">
            <Container>
                <div className="max-w-3xl mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Insights for the <br /> <span className="text-forest">Modern Café.</span>
                    </h1>
                    <p className="text-lg text-espresso/60">
                        Stories, strategies, and industry news to help you grow your café brand.
                    </p>
                </div>

                {error ? (
                    <div className="bg-white rounded-3xl p-12 text-center border border-cocoa/10 shadow-sm">
                        <h2 className="text-xl font-bold mb-4">WordPress Connection Pending</h2>
                        <p className="text-espresso/60 max-w-md mx-auto">
                            We've set up the blog infrastructure! Once you provide your WordPress URL and some posts, they'll appear here automatically.
                        </p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <Link
                                key={post.id}
                                href={`/blog/${post.slug}`}
                                className="group bg-white rounded-3xl overflow-hidden border border-cocoa/5 hover:border-forest/20 hover:shadow-xl transition-all duration-300 flex flex-col"
                            >
                                <div className="relative aspect-[16/9] bg-oat/50 overflow-hidden">
                                    {post.featuredImage ? (
                                        <Image
                                            src={post.featuredImage.node.sourceUrl}
                                            alt={post.featuredImage.node.altText || post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center text-forest/20">
                                            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M11.5 9.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zM24 20v2h-24v-2c0-1.054.59-1.976 1.456-2.456l9.544-5.207v-1.337c-1.215-.717-2-2.015-2-3.5 0-2.209 1.791-4 4-4s4 1.791 4 4c0 1.485-.785 2.783-2 3.5v1.337l9.544 5.207c.866.48 1.456 1.402 1.456 2.456z" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex flex-wrap items-center gap-2 mb-4">
                                        <span className="text-xs font-medium text-forest">
                                            {new Date(post.date).toLocaleDateString("en-NZ", { dateStyle: "medium" })}
                                        </span>
                                        {post.categories?.nodes?.filter((c) => c.slug !== "faq").length ? (
                                            <>
                                                <span className="text-cocoa/30">·</span>
                                                {post.categories.nodes
                                                    .filter((c) => c.slug !== "faq")
                                                    .map((cat) => (
                                                        <span
                                                            key={cat.slug}
                                                            className="text-xs font-medium text-forest/80 bg-forest/10 px-2 py-0.5 rounded-full"
                                                        >
                                                            {cat.name}
                                                        </span>
                                                    ))}
                                            </>
                                        ) : null}
                                    </div>
                                    <h2 className="text-xl font-bold mb-3 group-hover:text-forest transition-colors leading-snug">
                                        {post.title}
                                    </h2>
                                    <div
                                        className="text-sm text-espresso/60 line-clamp-3 mb-6 flex-1"
                                        dangerouslySetInnerHTML={{ __html: post.excerpt }}
                                    />
                                    <div className="flex items-center gap-3 mt-auto pt-6 border-t border-cocoa/5">
                                        {post.author.node.avatar && (
                                            <div className="relative w-6 h-6 rounded-full overflow-hidden">
                                                <Image
                                                    src={post.author.node.avatar.url}
                                                    alt={post.author.node.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        )}
                                        <span className="text-xs font-medium text-espresso/80">{post.author.node.name}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </Container>
        </main>
    );
}
