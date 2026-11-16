"use client";

import FloralAccent from "./FloralAccent";

export default function Hero({
  name,
  birthYear,
  deathYear,
  quote,
  portraitSrc = "../image01.jpeg",
}: {
  name: string;
  birthYear: string;
  deathYear: string;
  quote: string;
  portraitSrc?: string;
}) {
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-ivory via-beige to-ivory overflow-hidden pt-16 md:pt-24 pb-16">
      {/* Subtle background elements */}
      <FloralAccent
        size={200}
        className="absolute -top-20 -right-20 opacity-20"
      />
      <FloralAccent
        size={180}
        className="absolute -bottom-16 -left-16 opacity-20"
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Portrait Frame */}
        <div className="w-full lg:w-1/2 flex justify-center fade-in">
          <div className="relative">
            {/* Outer frame */}
            <div className="w-64 h-80 md:w-72 md:h-96 border-8 border-champagne bg-ivory shadow-2xl overflow-hidden">
              {/* Inner border */}
              <div className="absolute inset-2 border border-warm-gray/30" />

              {/* Portrait */}
              <div className="w-full h-full overflow-hidden flex items-center justify-center bg-beige">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={portraitSrc}
                  alt={name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 400'%3E%3Crect fill='%23ede8e3' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='%23a89a8e' text-anchor='middle' dominant-baseline='middle'%3EPortrait Image%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
            </div>

            {/* Decorative corner elements */}
            <FloralAccent
              size={80}
              className="absolute -top-6 -right-6 opacity-40"
            />
            <FloralAccent
              size={70}
              className="absolute -bottom-4 -left-4 opacity-40"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8 fade-in">
          <div className="space-y-4">
            <h1 className="serif-display text-5xl md:text-6xl text-charcoal">
              {name}
            </h1>
            <div className="inline-block lg:inline lg:block">
              <div className="divider-line w-32 mx-auto lg:mx-0 my-4" />
            </div>
            <p className="text-lg text-warm-gray font-light tracking-wide">
              {birthYear} – {deathYear}
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white/40 backdrop-blur-sm rounded-lg p-6 border border-champagne/30">
              <p className="serif-display text-2xl text-charcoal italic leading-relaxed">
                "{quote}"
              </p>
            </div>

            <p className="text-warm-gray leading-relaxed">
              A life lived with grace, wisdom, and boundless love for family.
              Their legacy continues through cherished memories and the values
              they instilled in all who knew them.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#story"
              className="px-8 py-3 border-2 border-champagne text-charcoal hover:bg-champagne/10 transition-colors duration-300 serif-heading uppercase tracking-widest text-sm"
            >
              Read Their Story
            </a>
            <a
              href="#gallery"
              className="px-8 py-3 border-2 border-warm-gray text-charcoal hover:bg-warm-gray/10 transition-colors duration-300 serif-heading uppercase tracking-widest text-sm"
            >
              View Gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
