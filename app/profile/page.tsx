import Link from "next/link";
import Image from "next/image";
import {
  Cormorant_Garamond,
  Noto_Serif_KR,
} from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const notoSerif = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
});

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* TOP NAV */}
      <nav className="fixed top-0 left-0 z-[999] w-full bg-black/80 backdrop-blur-md">
        <div
          className={`${notoSerif.className} mx-auto flex max-w-7xl items-center justify-center gap-8 py-5 text-sm tracking-[0.12em] text-gray-400`}
        >
          <Link
            href="/"
            className="relative -top-[1px] text-2xl hover:text-white transition"
          >
            ⌂
          </Link>

          <Link href="/profile" className="text-white">
            ABOUT
          </Link>

          <Link
            href="/career"
            className="hover:text-white transition"
          >
            CAREER
          </Link>

          <Link
            href="/video"
            className="hover:text-white transition"
          >
            VIDEO
          </Link>
        </div>
      </nav>

      {/* CONTENT */}
      <section className="flex flex-col items-center px-6 pt-20 md:pt-32 pb-24 text-center">

        {/* PORTRAIT */}
        <div className="w-full max-w-[320px]">
<Image
  src="/images/portrait5.jpg"
  alt="신진영"
  width={900}
  height={1200}
  priority
  className="w-full h-auto object-cover animate-cinematicReveal"
/>
        </div>

{/* NAME */}
<h1
  className={`${notoSerif.className} mt-10 text-2xl md:text-4xl font-light tracking-[0.08em] text-stone-100`}
>
  신진영
</h1>

{/* ACTOR */}
<p
  className={`${notoSerif.className} mt-6 text-xs md:text-sm text-gray-400`}
>
  Actor
</p>

{/* INFO */}
<div
  className={`${notoSerif.className} mt-6 space-y-2 text-xs md:text-sm text-gray-400`}
>
  <p>Born 1994</p>
  <p>아주대학교 경제학과 졸업</p>
</div>

        {/* CONTACT */}
        <div
          className={`${notoSerif.className} mt-24 flex flex-col items-center`}
        >
          <p className="text-xs md:text-sm text-gray-400">
            jinyoung1184@naver.com
          </p>

          <a
            href="https://www.instagram.com/rising_0/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 text-gray-500 transition hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path d="M16 11.37a4 4 0 1 1-7.75 1.26 4 4 0 0 1 7.75-1.26z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>

      </section>

    </main>
  );
}