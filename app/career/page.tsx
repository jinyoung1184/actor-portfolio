"use client";

import Link from "next/link";
import { useState } from "react";

const works = [
  {
    title: "우울한 좀비와 브런치",
    youtubeId: "rkOK5ONG9mQ",
    videoThumbnail: "/video/zombie1.JPG",
    festival: [
      "제22회 제천국제음악영화제",
      "제29회 부천국제판타스틱영화제 단편경쟁",
    ],
    poster: "/posters/zombie.JPG",
    stills: [
      "/stills/zombie/zom_still1.JPG",
      "/stills/zombie/zom_still2.JPG",
      "/stills/zombie/zom_still3.JPG",
      "/stills/zombie/zom_still4.JPG",
      "/stills/zombie/zom_still5.JPG",
      "/stills/zombie/zom_still6.JPG",
      "/stills/zombie/zom_still7.JPG",
      "/stills/zombie/zom_still8.JPG",
      "/stills/zombie/zom_still9.JPG",
      "/stills/zombie/zom_still10.JPG",
    ],
  },

  {
    title: "홀로",
    youtubeId: "YB1TYf89gAE",
    videoThumbnail: "/video/holo1.JPG",
    festival: ["제30회 부천국제판타스틱영화제 단편경쟁"],
    poster: "/posters/holo.JPG",
    stills: [
      "/stills/holo/holo_still1.JPG",
      "/stills/holo/holo_still2.JPG",
      "/stills/holo/holo_still3.JPG",
      "/stills/holo/holo_still4.JPG",
      "/stills/holo/holo_still5.JPG",
      "/stills/holo/holo_still6.JPG",
      "/stills/holo/holo_still7.JPG",
      "/stills/holo/holo_still8.JPG",
      "/stills/holo/holo_still9.JPG",
      "/stills/holo/holo_still10.JPG",
    ],
  },

  {
    title: "누구의 아이인가",
    youtubeId: "Wm4bOS9iR_c",
    videoThumbnail: "/video/cow1.JPG",
    festival: ["서경대학교 영화영상학과 석사과정 졸업작품"],
    poster: "/posters/cow.JPG",
    stills: [
      "/stills/cow/cow_still1.JPG",
      "/stills/cow/cow_still2.JPG",
      "/stills/cow/cow_still3.JPG",
      "/stills/cow/cow_still4.JPG",
      "/stills/cow/cow_still5.JPG",
      "/stills/cow/cow_still6.JPG",
    ],
  },

  {
    title: "연옥",
    youtubeId: "rC2LIQ7Tqz0",
    videoThumbnail: "/video/black1.JPG",
    festival: ["제50회 서울독립영화제 단편경쟁"],
    poster: "/posters/black.JPG",
    stills: [
      "/stills/black/black_still1.JPG",
      "/stills/black/black_still2.JPG",
      "/stills/black/black_still3.JPG",
      "/stills/black/black_still4.JPG",
      "/stills/black/black_still5.JPG",
      "/stills/black/black_still6.JPG",
      "/stills/black/black_still7.JPG",
      "/stills/black/black_still8.JPG",
    ],
  },

  {
    title: "메이 앤 준",
    youtubeId: "bw2Pd46m42o",
    videoThumbnail: "/video/may1.JPG",
    festival: [
      "제24회 전북독립영화제 배우상",
      "제50회 서울독립영화제 단편경쟁",
      "제25회 대구단편영화제 국내경쟁 대상",
    ],
    poster: "/posters/may.JPG",
    stills: [
      "/stills/may/may_still1.JPG",
      "/stills/may/may_still2.JPG",
      "/stills/may/may_still3.JPG",
      "/stills/may/may_still4.JPG",
      "/stills/may/may_still5.JPG",
      "/stills/may/may_still6.JPG",
      "/stills/may/may_still7.JPG",
      "/stills/may/may_still8.JPG",
      "/stills/may/may_still9.JPG",
      "/stills/may/may_still10.JPG",
    ],
  },

  {
    title: "비비비",
    youtubeId: null,
    videoThumbnail: null,
    festival: ["제27회 정동진독립영화제 단편경쟁"],
    poster: "/posters/bbb.JPG",
    stills: [],
  },
];

type Work = (typeof works)[number];

export default function CareerPage() {
const [selectedWork, setSelectedWork] = useState<Work | null>(null);
const [videoModal, setVideoModal] = useState(false);
const [selectedStill, setSelectedStill] = useState<string | null>(null);

  return (
  <main className="min-h-screen bg-black pt-24 text-white">

    <nav className="fixed top-0 left-0 z-[999] w-full bg-black/80 backdrop-blur-md">
 <div className="mx-auto flex max-w-7xl items-center justify-center gap-8 py-5 text-sm tracking-[0.2em] text-gray-400">

<Link
  href="/"
  className="relative -top-[1px] text-2xl hover:text-white transition"
>
  ⌂
</Link>

        <Link href="/profile" className="hover:text-white transition">
          PROFILE
        </Link>

        <Link href="/career" className="text-white">
          CAREER
        </Link>

        <Link href="/video" className="hover:text-white transition">
          VIDEO
        </Link>

      </div>
    </nav>
      {/* FILM GRID */}
      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="grid grid-cols-2 gap-6 xl:grid-cols-3">
          {works.map((work) => (
            <button
              key={work.title}
onClick={() => {
  setSelectedWork(work);
  setVideoModal(false);
}}
              className="group text-left"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-sm fade-in">
                <img
                  src={work.poster}
                  alt={work.title}
                  className="h-full w-full object-cover shadow-xl transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition duration-300 group-hover:opacity-100">
                  <span className="text-sm tracking-[0.35em]">
                    VIEW →
                  </span>
                </div>
              </div>

              <div className="mt-4 text-center">
                <h2 className="text-base font-light tracking-[0.06em]">
                  {work.title}
                </h2>


<div className="mt-2 min-h-[80px] space-y-1">
  {work.festival.map((item) => (
    <p
      key={item}
      className="text-xs leading-relaxed text-gray-500"
    >
      {item}
    </p>
  ))}
</div>
              </div>
            </button>
          ))}
        </div>
      </section>

{/* MODAL */}
{selectedWork && (
<div className="fixed inset-0 z-[1000] overflow-y-auto bg-black/95 fade-in">
    <button
onClick={() => {
  setSelectedWork(null);
  setVideoModal(false);
  setSelectedStill(null);
}}
className="fixed right-8 top-6 z-[1001] text-4xl font-light text-white hover:text-gray-400 transition"
    >
      ×
    </button>

    <div className="mx-auto max-w-6xl px-6 py-20">

      {/* VIDEO */}
{selectedWork.youtubeId && (
  <div className="mx-auto mt-12 w-full max-w-6xl fade-in">
    <button
      onClick={() => setVideoModal(true)}
      className="group relative block w-full overflow-hidden"
    >
      <img
        src={selectedWork.videoThumbnail!}
        alt={selectedWork.title}
        className="w-full object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/70 bg-black/50 backdrop-blur-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="white"
          >
            <polygon points="5,3 19,12 5,21" />
          </svg>
        </div>
      </div>
    </button>
  </div>
)}

      {/* STILLS */}
      {selectedWork.stills.length > 0 && (
        <div className="mt-16 grid grid-cols-2 gap-4 md:gap-6">
          {selectedWork.stills.map((still) => (
            <button
              key={still}
              onClick={() => setSelectedStill(still)}
              className="aspect-video overflow-hidden"
            >
              <img
                src={still}
                alt=""
                className="h-full w-full object-cover transition duration-300 hover:scale-105"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  </div>
)}
{videoModal && selectedWork?.youtubeId && (
  <div className="fixed inset-0 z-[3000] flex items-center justify-center bg-black/95 px-4">
    <button
      onClick={() => setVideoModal(false)}
      className="fixed right-8 top-6 z-[3001] text-5xl font-light text-white hover:text-gray-400 transition"
    >
      ×
    </button>

    <div className="w-full max-w-6xl">
      <div className="relative aspect-video">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${selectedWork.youtubeId}?autoplay=1&rel=0`}
          title={selectedWork.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  </div>
)}
{/* STILL MODAL */}
{selectedStill && (
  <div
    className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/95 p-4"
    onClick={() => setSelectedStill(null)}
  >
    <button
      onClick={() => setSelectedStill(null)}
className="absolute right-6 top-6 z-[2001] text-4xl font-light text-white"
    >
      ×
    </button>

    <img
      src={selectedStill}
      alt=""
      className="max-h-[90vh] max-w-[95vw] object-contain"
      onClick={(e) => e.stopPropagation()}
    />
  </div>
)}

</main>
);
}