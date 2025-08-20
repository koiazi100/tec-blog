import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <img
    src={src}
    alt={`Cover Image for ${title}`}
    className={cn( 'w-full h-full object-cover shadow-sm', {
      'hover:shadow-lg transition-shadow duration-200  rounded-xl': slug,
    })}
  />
  );
  return (
    <div className="w-full h-full overflow-hidden rounded-xl sm:mx-0 p-5">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
