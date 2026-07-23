"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProfilePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-black pt-24 text-white">

      {/* TOP NAV */}
      <nav className="fixed top-0 left-0 z-[999] w-full bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-8 py-5 text-sm tracking-[0.2em] text-gray-400">

          <Link
            href="/"
            className="relative -top-[1px] text-2xl hover:text-white transition"
          >
            ⌂
          </Link>

          <Link href="/profile" className="text-white">
            PROFILE
          </Link>

          <Link href="/career" className="hover:text-white transition">
            CAREER
          </Link>

          <Link href="/video" className="hover:text-white transition">
            VIDEO
          </Link>

        </div>
      </nav>

      {/* 프로필 사진 3장 */}
      <section className="mx-auto max-w-6xl px-6 fade-in">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          <img
            src="/images/profile1.jpg"
            alt="신진영 프로필 1"
            className="w-full h-auto cursor-pointer"
            onClick={() => setSelectedImage("/images/profile1.jpg")}
          />

          <img
            src="/images/profile2.jpg"
            alt="신진영 프로필 2"
            className="w-full h-auto cursor-pointer"
            onClick={() => setSelectedImage("/images/profile2.jpg")}
          />

          <img
            src="/images/profile3.jpg"
            alt="신진영 프로필 3"
            className="w-full h-auto cursor-pointer"
            onClick={() => setSelectedImage("/images/profile3.jpg")}
          />

        </div>
      </section>

      {/* 이름 + 정보 */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h1 className="text-4xl font-light tracking-[0.08em] md:text-5xl">
          신진영
        </h1>

        <div className="mt-10 space-y-4 text-gray-500">
          <p className="text-sm tracking-[0.08em]">
            Born 1994
          </p>

          <p className="text-sm tracking-[0.08em]">
            177cm · 74kg
          </p>

          <p className="text-sm tracking-[0.08em]">
            아주대학교 경제학과 졸업
          </p>
        </div>
      </section>

      {/* 대표사진 */}
      <section className="mx-auto max-w-2xl px-6 pb-32 fade-in">
        <img
          src="/images/portrait5.jpg"
          alt="신진영 대표 프로필"
          className="mx-auto w-full h-auto cursor-pointer"
          onClick={() => setSelectedImage("/images/portrait5.jpg")}
        />
      </section>

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-6 top-6 z-[2001] text-4xl font-light text-white hover:text-gray-400 transition"
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt=""
            className="max-h-[90vh] max-w-[95vw] object-contain fade-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </main>
  );
}