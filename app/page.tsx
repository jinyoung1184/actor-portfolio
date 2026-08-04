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

      {/* DESKTOP VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 hidden md:block w-full h-full object-cover animate-cinematicReveal"
      >
        <source src="/video/hero-desktop.mp4" type="video/mp4" />
      </video>

      {/* MOBILE VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 block md:hidden w-full h-full object-cover animate-cinematicReveal"
      >
        <source src="/video/hero-mobile.mp4" type="video/mp4" />
      </video>


      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/20" />


      {/* TOP NAV */}
      <nav className="absolute top-0 left-0 z-30 w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-8 py-5 text-sm tracking-[0.2em] text-gray-400">

          <Link
            href="/"
            className="relative -top-[1px] text-2xl text-white hover:text-gray-300 transition"
          >
            ⌂
          </Link>

          <Link
            href="/profile"
            className="text-white hover:text-gray-300 transition"
          >
            PROFILE
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


      {/* NAME + CONTACT */}
      <div className="relative z-10 flex h-full flex-col justify-end pb-8 text-center md:pb-24 md:items-end md:pr-20">

        <div className="md:text-right">

          <h1
            className={`${notoSerif.className} text-4xl md:text-[6rem] font-light tracking-[0.08em] text-stone-100`}
          >
            신진영
          </h1>

          <p
            className={`${cormorant.className} mt-2 text-xs md:text-base tracking-[0.3em] text-gray-300`}
          >
            JIN YOUNG SHIN
          </p>

        </div>


        <p className="mt-5 text-xs md:text-sm tracking-[0.08em] text-gray-300">
          jinyoung1184@naver.com
        </p>


        <a
          href="https://www.instagram.com/rising_0/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 mx-auto md:mx-0 text-gray-300 hover:text-white"
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