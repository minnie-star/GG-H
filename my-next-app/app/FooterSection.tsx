"use client";

import FloralAccent from "./FloralAccent";

export default function FooterSection() {
  return (
    <footer className="py-16 md:py-24 bg-charcoal text-ivory relative overflow-hidden">
      <FloralAccent
        size={150}
        className="absolute top-10 right-10 opacity-10"
      />
      <FloralAccent
        size={140}
        className="absolute bottom-10 left-10 opacity-10"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 space-y-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="serif-heading text-xl text-champagne">Contact</h3>
            <div className="space-y-2 text-ivory/80">
              <p>Family Contact</p>
              <p className="font-semibold">+27 (0) 83 268 8130 </p>
            </div>
          </div>

          {/* Service Information */}
          <div className="space-y-4">
            <h3 className="serif-heading text-xl text-champagne">
              Family Church
            </h3>
            <div className="space-y-2 text-ivory/80">
              <p>The Church of Jesus Christ of Latter-day Saints</p>
              <p>3 Philips Avenue</p>
              <p>Roodepoort, Johannesburg, 1709</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="serif-heading text-xl text-champagne">Navigation</h3>
            <div className="space-y-2">
              <a
                href="#story"
                className="block text-ivory/80 hover:text-champagne transition-colors"
              >
                Life Story
              </a>
              <a
                href="#gallery"
                className="block text-ivory/80 hover:text-champagne transition-colors"
              >
                Gallery
              </a>
              <a
                href="#tributes"
                className="block text-ivory/80 hover:text-champagne transition-colors"
              >
                Tributes
              </a>
            </div>
          </div>
        </div>

        <div className="divider-line opacity-50" />

        <div className="text-center space-y-4">
          <p className="serif-display text-xl text-champagne">
            "In loving memory, we keep the light burning."
          </p>
          <p className="text-ivory/60 text-sm">
            © 2026 Memorial Website. Created by Minnie.
          </p>
        </div>
      </div>
    </footer>
  );
}
