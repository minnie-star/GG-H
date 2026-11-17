"use client";

import { useState, useEffect } from "react";
import FloralAccent from "./FloralAccent";

export default function Slideshow() {
  const TOTAL = 20;
  const photos = Array.from({ length: TOTAL }, (_, i) => i + 1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-advance slideshow
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TOTAL);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + TOTAL) % TOTAL);
    setIsPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TOTAL);
    setIsPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-20 md:py-32 bg-ivory relative overflow-hidden">
      <FloralAccent
        size={200}
        className="absolute top-20 left-0 opacity-15"
      />
      <FloralAccent
        size={180}
        className="absolute bottom-20 right-0 opacity-15"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="serif-display text-5xl md:text-6xl text-charcoal">
            A Life in Moments
          </h2>
          <div className="divider-line w-24 mx-auto" />
          <p className="text-warm-gray">
            Relive cherished memories through our slideshow
          </p>
        </div>

        {/* Main Slideshow Container */}
        <div className="relative w-full max-h-[600px] overflow-hidden rounded-lg shadow-2xl border border-champagne/30 bg-white/50">
          {/* Image Display */}
          <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
            {photos.map((n, index) => (
              <div
                key={n}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/photos/${n}.jpg`}
                  alt={`Memory ${n}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm transition-all duration-300 text-charcoal border border-white/40"
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
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm transition-all duration-300 text-charcoal border border-white/40"
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

            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="absolute bottom-4 right-4 z-20 p-3 rounded-full bg-champagne hover:bg-champagne/80 transition-colors duration-300 text-charcoal"
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isPlaying ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </div>

          {/* Info Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-white/40 backdrop-blur-sm border-t border-champagne/20">
            <div>
              <p className="serif-heading text-charcoal">
                Photo{" "}
                <span className="text-champagne">{currentIndex + 1}</span> of{" "}
                <span className="text-champagne">{TOTAL}</span>
              </p>
            </div>
            <p className="text-xs text-warm-gray uppercase tracking-widest">
              {isPlaying ? "Auto-advancing" : "Paused"}
            </p>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex overflow-x-auto gap-2 pb-2 px-4">
          {photos.map((n, index) => (
            <button
              key={n}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded border-2 transition-all duration-300 overflow-hidden ${
                index === currentIndex
                  ? "border-champagne ring-2 ring-champagne/50 scale-105"
                  : "border-champagne/40 hover:border-champagne/70"
              }`}
              aria-label={`Go to photo ${n}`}
              aria-current={index === currentIndex}
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

        {/* Progress Indicator */}
        <div className="w-full bg-beige rounded-full h-1 overflow-hidden">
          <div
            className="h-full bg-champagne transition-all duration-300"
            style={{
              width: `${((currentIndex + 1) / TOTAL) * 100}%`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
