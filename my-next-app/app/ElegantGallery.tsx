"use client";

import { useState, useRef, useEffect } from "react";
import FloralAccent from "./FloralAccent";

export default function ElegantGallery() {
  const TOTAL = 20;
  const photos = Array.from({ length: TOTAL }, (_, i) => i + 1);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (selectedIndex === null) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && selectedIndex < TOTAL - 1) {
      setSelectedIndex(selectedIndex + 1);
    } else if (isRightSwipe && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && selectedIndex < TOTAL - 1) {
        setSelectedIndex(selectedIndex + 1);
      } else if (e.key === "ArrowLeft" && selectedIndex > 0) {
        setSelectedIndex(selectedIndex - 1);
      } else if (e.key === "Escape") {
        setSelectedIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const goToPrevious = () => {
    if (selectedIndex! > 0) setSelectedIndex(selectedIndex! - 1);
  };

  const goToNext = () => {
    if (selectedIndex! < TOTAL - 1) setSelectedIndex(selectedIndex! + 1);
  };

  return (
    <section id="gallery" className="py-20 md:py-32 bg-white/40 backdrop-blur-sm relative">
      <FloralAccent
        size={180}
        className="absolute top-10 left-0 opacity-15"
      />

      <div className="mx-auto max-w-7xl px-6 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="serif-display text-5xl md:text-6xl text-charcoal">
            Cherished Memories
          </h2>
          <div className="divider-line w-24 mx-auto" />
          <p className="text-warm-gray">
            Click any image to view in full screen • Swipe or use arrow keys to navigate
          </p>
        </div>

        {/* Grid Gallery */}
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {photos.map((n) => (
            <button
              key={n}
              onClick={() => setSelectedIndex(n - 1)}
              className="group relative aspect-square overflow-hidden rounded-sm border border-champagne/20 hover:border-champagne/60 transition-all duration-300 cursor-pointer bg-white/50"
              aria-label={`View photo ${n}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/photos/${n}.jpg`}
                alt={`Memory ${n}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Image Container */}
          <div
            className="relative w-full max-w-5xl h-full max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Display */}
            <div className="relative w-full h-full flex items-center justify-center mb-4">
              <div className="relative w-full max-h-[calc(85vh-100px)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/photos/${selectedIndex + 1}.jpg`}
                  alt={`Memory ${selectedIndex + 1}`}
                  className="w-full h-full object-contain rounded-lg shadow-2xl"
                />

                {/* Navigation Overlay */}
                <div className="absolute inset-0 flex items-center justify-between px-4 md:px-6 pointer-events-none">
                  <button
                    onClick={goToPrevious}
                    disabled={selectedIndex === 0}
                    className="pointer-events-auto p-3 md:p-4 rounded-full bg-white/20 hover:bg-white/40 disabled:opacity-30 disabled:cursor-not-allowed text-white transition-all duration-300 backdrop-blur-sm border border-white/30"
                    aria-label="Previous image"
                  >
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={goToNext}
                    disabled={selectedIndex === TOTAL - 1}
                    className="pointer-events-auto p-3 md:p-4 rounded-full bg-white/20 hover:bg-white/40 disabled:opacity-30 disabled:cursor-not-allowed text-white transition-all duration-300 backdrop-blur-sm border border-white/30"
                    aria-label="Next image"
                  >
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Info Bar */}
            <div className="w-full flex items-center justify-between px-4">
              <div className="text-white text-center flex-1">
                <p className="serif-heading text-lg text-champagne">
                  {selectedIndex + 1} / {TOTAL}
                </p>
                <p className="text-xs text-white/60 mt-1">
                  Swipe left/right or use arrow keys
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="p-2 md:p-3 rounded-full hover:bg-white/20 text-white transition-colors"
                aria-label="Close gallery"
              >
                <svg
                  className="w-6 h-6 md:w-8 md:h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="mt-6 flex gap-2 overflow-x-auto max-w-full pb-2 px-4">
              {photos.map((n) => (
                <button
                  key={n}
                  onClick={() => setSelectedIndex(n - 1)}
                  className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded border-2 transition-all duration-300 overflow-hidden ${
                    selectedIndex === n - 1
                      ? "border-champagne ring-2 ring-champagne/50"
                      : "border-white/30 hover:border-white/60"
                  }`}
                  aria-label={`Go to photo ${n}`}
                  aria-current={selectedIndex === n - 1}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/photos/${n}.jpg`}
                    alt={`Thumbnail ${n}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
