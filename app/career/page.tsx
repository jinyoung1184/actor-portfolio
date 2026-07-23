"use client";

import Link from "next/link";
import { useState } from "react";

const works = [
  {
    title: "우울한 좀비와 브런치",
    youtubeId: "rkOK5ONG9mQ",
    videoThumbnail: "/video/zombie1.jpg",
    festival: [
      "제22회 제천국제음악영화제 뉴탤런트",
      "제29회 부천국제판타스틱영화제 단편경쟁",
    ],
    poster: "/posters/zombie.jpg",
    stills: [
      "/stills/zombie/zom_still1.jpg",
      "/stills/zombie/zom_still2.jpg",
      "/stills/zombie/zom_still3.jpg",
      "/stills/zombie/zom_still4.jpg",
      "/stills/zombie/zom_still5.jpg",
      "/stills/zombie/zom_still6.jpg",
      "/stills/zombie/zom_still7.jpg",
      "/stills/zombie/zom_still8.jpg",
      "/stills/zombie/zom_still9.jpg",
      "/stills/zombie/zom_still10.jpg",
    ],
  },

{
  title: "홀로",
  youtubeId: "YB1TYf89gAE",
  videoThumbnail: "/video/holo1.jpg",
  festival: ["제30회 부천국제판타스틱영화제 단편경쟁"],
  poster: "/posters/holo.jpg",
  stills: [
    "/stills/holo/holo_still1.jpg",
    "/stills/holo/holo_still2.jpg",
    "/stills/holo/holo_still3.jpg",
    "/stills/holo/holo_still4.jpg",
    "/stills/holo/holo_still5.jpg",
    "/stills/holo/holo_still6.jpg",
    "/stills/holo/holo_still7.jpg",
    "/stills/holo/holo_still8.jpg",
    "/stills/holo/holo_still9.jpg",
    "/stills/holo/holo_still10.jpg",
  ],
},

  {
    title: "누구의 아이인가",
    youtubeId: "Wm4bOS9iR_c",
    videoThumbnail: "/video/cow1.jpg",
    festival: ["서경대학교 영화영상학과 석사과정 졸업작품"],
    poster: "/posters/cow.jpg",
    stills: [
    "/stills/cow/cow_still1.jpg",
    "/stills/cow/cow_still2.jpg",
    "/stills/cow/cow_still3.jpg",
    "/stills/cow/cow_still4.jpg",
    "/stills/cow/cow_still5.jpg",
    "/stills/cow/cow_still6.jpg",
  ],
  },

  {
    title: "연옥",
    youtubeId: "rC2LIQ7Tqz0",
    videoThumbnail: "/video/black1.jpg",
    festival: ["제50회 서울독립영화제 단편경쟁"],
    poster: "/posters/black.jpg",
    stills: [
    "/stills/black/black_still1.jpg",
    "/stills/black/black_still2.jpg",
    "/stills/black/black_still3.jpg",
    "/stills/black/black_still4.jpg",
    "/stills/black/black_still5.jpg",
    "/stills/black/black_still6.jpg",
    "/stills/black/black_still7.jpg",
    "/stills/black/black_still8.jpg",
  ],
  },

  {
    title: "메이 앤 준",
    youtubeId: "bw2Pd46m42o",
    videoThumbnail: "/video/may1.jpg",
    festival: [
      "제24회 전북독립영화제 배우상",
      "제50회 서울독립영화제 단편경쟁",
      "제25회 대구단편영화제 국내경쟁 대상",
    ],
    poster: "/posters/may.jpg",
  stills: [
    "/stills/may/may_still1.jpg",
    "/stills/may/may_still2.jpg",
    "/stills/may/may_still3.jpg",
    "/stills/may/may_still4.jpg",
    "/stills/may/may_still5.jpg",
    "/stills/may/may_still6.jpg",
    "/stills/may/may_still7.jpg",
    "/stills/may/may_still8.jpg",
    "/stills/may/may_still9.jpg",
    "/stills/may/may_still10.jpg",
  ],
  },

  {
    title: "비비비",
    youtubeId: null,
    videoThumbnail: null,
    festival: ["제27회 정동진독립영화제 단편경쟁"],
    poster: "/posters/bbb.jpg",
    stills: [],
  },
];

type Work = (typeof works)[number];

export default function CareerPage() {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [playVideo, setPlayVideo] = useState(false);
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
                setPlayVideo(false);
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
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/95">
          <button
            onClick={() => {
              setSelectedWork(null);
              setPlayVideo(false);
            }}
            className="fixed right-8 top-6 text-4xl font-light text-white hover:text-gray-400"
          >
            ×
          </button>

          <div className="mx-auto max-w-6xl px-6 py-20">


            {/* VIDEO */}
            {selectedWork.youtubeId && (
              <div className="mt-12 mx-auto max-w-4xl">
                {!playVideo ? (
                  <button
                    onClick={() => setPlayVideo(true)}
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
                ) : (
                  <div className="relative aspect-video">
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={`https://www.youtube.com/embed/${selectedWork.youtubeId}?autoplay=1&rel=0`}
                      title={selectedWork.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>
            )}

            {/* FESTIVAL */}

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

      {/* STILL MODAL */}
      {selectedStill && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setSelectedStill(null)}
        >
          <button
            onClick={() => setSelectedStill(null)}
            className="absolute right-6 top-6 text-4xl font-light text-white"
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