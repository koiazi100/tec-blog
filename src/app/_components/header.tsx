import Link from "next/link";
import Image from "next/image"

const Header = () => {
  return (

     <section className="relative w-screen h-48 mb-10">
          {/* 背景画像レイヤー */}
          <Image
            src="/assets/top/top.jpeg"
            alt="トップ画像"
            fill
            className="object-cover"
            priority
          />
    
          {/* テキストレイヤー */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Link href="/" className="text-5xl md:text-7xl font-bold text-slate-600/100 drop-shadow-lg tracking-tighter leading-tight md:pr-8">
            こいあじ Tech Notes
            </Link>
              <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
              <a
                href="https://nextjs.org/"
                className="underline hover:text-blue-600 duration-200 transition-colors"
              >
              </a>{" "}
              </h4>
          </div>
        </section>
  );
};

export default Header;
