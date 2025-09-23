import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Alert from "@/app/_components/alert";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import Script from "next/script";
import { ZennEmbedClient } from "@/app/_components/ZennEmbedClient"; // ← 修正パス

// ✅ サーバーコンポーネント (use client は書かない)
export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params; // ← await で警告回避
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      {/* Zenn の埋め込み要素を有効化するクライアントコンポーネント */}
      <ZennEmbedClient />

      <Alert preview={post.preview} />
      <Header />
      <Container>
        <article className="pb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} tags={post.tags} />
        </article>
      </Container>

      {/* Zenn が提供している公式スクリプト */}
      <Script
        src="https://embed.zenn.studio/js/listen-embed-event.js"
        strategy="lazyOnload"
      />
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params; // ← 同様に await
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title,
    metadataBase: new URL("https://tec-blog-53776.web.app"), 
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
