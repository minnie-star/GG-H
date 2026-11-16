"use client";

import FloralAccent from "./FloralAccent";

export default function LifeStory({ biography }: { biography: string }) {
  return (
    <section
      id="story"
      className="relative py-20 md:py-32 bg-white/40 backdrop-blur-sm border-t border-b border-champagne/20"
    >
      <FloralAccent
        size={150}
        className="absolute top-10 right-0 opacity-15"
      />
      <FloralAccent
        size={160}
        className="absolute bottom-10 left-0 opacity-15"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="serif-display text-5xl md:text-6xl text-charcoal">
            A Life Well Lived
          </h2>
          <div className="divider-line w-24 mx-auto" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed text-charcoal/90 whitespace-pre-line">
            {biography}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-champagne/20">
          {[
            { label: "Years Lived", value: "76" },
            { label: "Children", value: "7" },
            { label: "Grandchildren", value: "19" },
            { label: "Great-grandchildren", value: "1" },
          ].map((stat) => (
            <div key={stat.label} className="text-center space-y-2">
              <p className="serif-display text-3xl text-champagne">
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-widest text-warm-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
