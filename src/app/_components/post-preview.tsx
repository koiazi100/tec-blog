import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  slug,
}: Props) {
  return (
    <div className="flex flex-row items-start w-full h-48 overflow-auto border-2 border-gray-400 overflow-hidden">
      <div className="!w-48 h-48">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className="flex flex-col h-48 flex-1 ml-4 mr-4">
        <h3 className="flex-1 text-xl mt-5 font-bold">
          <Link as={`/posts/${slug}`} href="/posts/[slug]" className="hover:underline">
            {title}
          </Link>
        </h3>
        <div className="flex flex-1 flex-col">
          <div className="font-bold text-xs my-auto mx-2">
            <DateFormatter dateString={date} />
          </div>
        </div>
      </div>
    </div>
  );
}
