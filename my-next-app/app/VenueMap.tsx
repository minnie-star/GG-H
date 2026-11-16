"use client";

import FloralAccent from "./FloralAccent";

export default function VenueMap() {
  return (
    <section className="py-20 md:py-32 bg-ivory relative overflow-hidden">
      <FloralAccent
        size={200}
        className="absolute top-20 right-0 opacity-15"
      />
      <FloralAccent
        size={150}
        className="absolute bottom-20 left-0 opacity-15"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="serif-display text-5xl md:text-6xl text-charcoal">
            Service Location
          </h2>
          <div className="divider-line w-24 mx-auto" />
          <p className="text-warm-gray">
            Find us at the venue below
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Venue Information */}
          <div className="space-y-6">
            <div className="space-y-4 p-8 border border-champagne/30 bg-white/40 backdrop-blur-sm rounded-lg hover:border-champagne/60 transition-colors duration-300">
              <h3 className="serif-heading text-2xl text-charcoal">
                Main Funeral Service
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm uppercase tracking-widest text-champagne font-semibold">
                    Venue
                  </p>
                  <p className="text-lg text-charcoal mt-1">
                    3 Philips Avenue, Discovery
                  </p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-champagne font-semibold">
                    Address
                  </p>
                  <p className="text-lg text-charcoal mt-1">
                    Roodepoort, 1709, South Africa
                  </p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-champagne font-semibold">
                    Service Time
                  </p>
                  <p className="text-lg text-charcoal mt-1">
                    Saturday, 21 November 2026 • 10:00 AM
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-beige/50 border border-champagne/20 rounded-lg">
              <p className="text-warm-gray leading-relaxed">
                A peaceful and dignified setting where family and friends gather to honor and celebrate a life well lived. The venue provides comfortable seating and a warm atmosphere for the service.
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-lg overflow-hidden shadow-xl border border-champagne/30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.354226956783!2d27.891905975713005!3d-26.152590777108028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a024942c13a7%3A0xbe1bf06c845934a4!2s3%20Philips%20Ave%2C%20Discovery%2C%20Roodepoort%2C%201709!5e0!3m2!1sen!2sza!4v1794815452461!5m2!1sen!2sza"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Funeral service venue location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
