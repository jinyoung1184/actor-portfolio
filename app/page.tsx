import Link from "next/link";
import {
  Cormorant_Garamond,
  Noto_Serif_KR,
} from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const notoSerif = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden bg-black text-white">
<img
  src="/images/hero.jpg"
  alt="신진영"
  className="absolute inset-0 h-full w-full object-cover animate-cinematicReveal"
  style={{
    objectPosition: "35% 25%",
  }}
/>

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full flex-col justify-end pb-24 text-center md:items-end md:pr-32">
        <h1
          className={`${notoSerif.className} text-6xl md:text-[9rem] font-light tracking-[0.08em] text-stone-100`}
        >
          신진영
        </h1>

        <p
          className={`${cormorant.className} mt-2 text-sm md:text-lg tracking-[0.3em] text-gray-300`}
        >
          JIN YOUNG SHIN
        </p>

        <nav className="mt-10 flex items-center justify-center gap-4 text-xs tracking-[0.35em] md:gap-8 md:text-sm">
          <Link href="/profile" className="hover:text-gray-300">
            PROFILE
          </Link>

          <span className="text-white/30">•</span>

          <Link href="/career" className="hover:text-gray-300">
            CAREER
          </Link>

          <span className="text-white/30">•</span>

          <Link href="/video" className="hover:text-gray-300">
            VIDEO
          </Link>
        </nav>

        <p className="mt-10 text-xs md:text-sm tracking-[0.08em] text-gray-300">
          jinyoung1184@naver.com
        </p>

<a
  href="https://www.instagram.com/rising_0/"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-5 mx-auto md:mx-0 text-gray-300 hover:text-white"
>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <path d="M16 11.37a4 4 0 1 1-7.75 1.26 4 4 0 0 1 7.75-1.26z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
      </div>
    </main>
  );
}