import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
    <section className="max-w-4xl align-center mx-auto">
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
 <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 gap-y-20 md:gap-y-32 pb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
