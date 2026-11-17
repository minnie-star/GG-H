'use client';

import React, { useRef } from 'react';
import FloralAccent from './FloralAccent';

export default function VideoMemorial() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-ivory to-beige relative overflow-hidden">
      <FloralAccent size={120} opacity={0.08} className="absolute top-10 right-10" />
      <FloralAccent size={100} opacity={0.08} className="absolute bottom-10 left-10" />

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="serif-display text-4xl md:text-5xl text-charcoal mb-4">
            Video Memorial
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-champagne to-transparent mx-auto mb-6"></div>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            A cherished video remembrance of treasured moments
          </p>
        </div>

        {/* Video Container */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-4xl bg-charcoal/5 rounded-lg overflow-hidden shadow-lg border border-champagne/30 hover:border-champagne/50 transition-colors duration-300">
            <video
              ref={videoRef}
              controls
              className="w-full h-auto"
              style={{
                maxHeight: '600px',
              }}
            >
              <source
                src="/photos/WhatsApp Video 2026-11-17 at 16.43.50.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-charcoal/60 italic text-base leading-relaxed">
            This video captures precious memories and special moments that celebrate a life well-lived and the enduring love of family and friends.
          </p>
        </div>
      </div>
    </section>
  );
}
