import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import "zenn-content-css";

export default async function Index() {
  const allPosts = await getAllPosts();
  const morePosts = allPosts.slice(0);

  return (
    <main>
      <Intro />
      <Container>
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
