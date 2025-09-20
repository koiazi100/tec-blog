import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
    <section className="max-w-4xl align-center mx-auto">
      <h2 className="mb-8 text-2xl md:text-2xl text-center font-bold tracking-tighter leading-tight">
        記事一覧
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 gap-y-6 pb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
