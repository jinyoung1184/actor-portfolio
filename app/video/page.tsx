"use client";

import Link from "next/link";
import { useState } from "react";
import { Noto_Serif_KR } from "next/font/google";

const notoSerif = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
});

const sections = [
  {
    title: "SELF TAPE",
    videos: [
      {
        title: "자유연기",
        subtitle: "American History X (Scene Study)",
        youtubeId: "Xz145KCX-js",
        thumbnail: "/video/free1.JPG",
      },
    ],
  },

  {
    title: "MUSIC VIDEO",
    videos: [
      {
        title: "새벽 5시",
        subtitle: "Music Video",
        youtubeId: "cva0wAz8gI4",
        thumbnail: "/video/music1.JPG",
      },
      {
        title: "Love Season",
        subtitle: "이효정",
        youtubeId: "9uFoLE2viX8",
        thumbnail: "/video/love.JPG",
      },
    ],
  },
];

export default function VideoPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
  <main className="min-h-screen bg-black pt-24 text-white">

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

          <Link href="/profile" className="hover:text-white transition">
            ABOUT
          </Link>

          <Link href="/career" className="hover:text-white transition">
            CAREER
          </Link>

          <Link href="/video" className="hover:text-white transition">
            VIDEO
          </Link>

        </div>
      </nav>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="space-y-24">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-10 text-lg tracking-[0.3em] text-gray-500">
                {section.title}
              </h2>

              {/* 2열 레이아웃 적용 */}
              <div className="grid gap-16 md:grid-cols-2 xl:grid-cols-2">
                {section.videos.map((video) => (
                  <button
                    key={video.title}
                    onClick={() => setSelectedVideo(video.youtubeId)}
                    className="group block text-left"
                  >
                    <div className="relative overflow-hidden rounded-sm bg-zinc-900 animate-cinematicReveal">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="h-[340px] w-full object-cover object-center shadow-xl transition duration-700 group-hover:scale-105"
                      />

                      {/* PLAY ICON */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition duration-300 group-hover:opacity-100">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/70 bg-black/40 backdrop-blur-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            viewBox="0 0 24 24"
                            fill="white"
                          >
                            <polygon points="5,3 19,12 5,21" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <h3 className="mt-5 text-xl font-light tracking-[0.04em]">
                      {video.title}
                    </h3>

                    <p className="mt-1 text-xs tracking-[0.12em] text-gray-500">
                      {video.subtitle}
                    </p>


                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
{/* CONTACT */}
<div
  className={`${notoSerif.className} fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center`}
>
  <p className="text-xs md:text-sm text-gray-400">
    jinyoung1184@naver.com
  </p>

  <a
    href="https://www.instagram.com/rising_0/"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-2 text-gray-500 transition hover:text-white"
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

{/* VIDEO MODAL */}
{selectedVideo && (
  <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 px-4">
    <button
      onClick={() => setSelectedVideo(null)}
      className="fixed right-8 top-6 z-[1001] text-4xl font-light text-white transition hover:text-gray-400"
    >
      ×
    </button>

    <div className="w-full max-w-6xl">
      <div className="relative aspect-video">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
          title="Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  </div>
)}

</main>
);
}