import {getAllTags, getPostsByTag} from "../../../lib/api";
import {Post} from "../../../interfaces/post";
import Layout from "../../layout";
import Container from "../../_components/container";
import {MoreStories} from "../../_components/more-stories";

type Props = {
  params: {
    tag: string;
  };
};

export default async function TagPage({ params }: Props) {
  const posts: Post[] = await getPostsByTag(params.tag);
  const tag = params.tag;

  return (
    <Layout>
      <Container>
        <h1 className="text-2xl font-bold mb-4">Tag: {tag}</h1>
        <MoreStories posts={posts} />
      </Container>
    </Layout>
  );
}

// 静的生成対象のタグ一覧を返す（旧 getStaticPaths 相当）
export async function generateStaticParams() {
  const tags = await getAllTags();

  return tags.map((tag: string) => ({
    tag,
  }));
}