"use client";

import FloralAccent from "./FloralAccent";

export default function OnlineParticipation() {
  return (
    <section className="py-20 md:py-32 bg-white/40 backdrop-blur-sm relative overflow-hidden">
      <FloralAccent
        size={180}
        className="absolute top-20 right-0 opacity-15"
      />
      <FloralAccent
        size={160}
        className="absolute bottom-20 left-0 opacity-15"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="serif-display text-5xl md:text-6xl text-charcoal">
            Join Us Online
          </h2>
          <div className="divider-line w-24 mx-auto" />
          <p className="text-warm-gray">
            For those unable to attend in person, join us virtually
          </p>
        </div>

        <div className="flex justify-center">
          {/* Zoom Meeting */}
          <div className="w-full max-w-md space-y-6 p-8 border border-champagne/30 bg-ivory rounded-lg hover:border-champagne/60 hover:shadow-lg transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm3.5-11c.828 0 1.5-.672 1.5-1.5S16.328 8 15.5 8 14 8.672 14 9.5s.672 1.5 1.5 1.5zm-7 0c.828 0 1.5-.672 1.5-1.5S9.328 8 8.5 8 7 8.672 7 9.5 7.672 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.16-3.5H5.34c.85 2.04 2.83 3.5 5.16 3.5z" />
                  </svg>
                </div>
                <h3 className="serif-heading text-2xl text-charcoal">
                  Zoom Meeting
                </h3>
              </div>
              <p className="text-warm-gray leading-relaxed">
                Invited by Bishop. Participate in an interactive virtual memorial service via Zoom. Connect with family and friends from anywhere in the world.
              </p>
            </div>

            <div className="space-y-3 bg-beige/40 p-4 rounded">
              <div>
                <p className="text-xs font-semibold text-charcoal uppercase tracking-widest">
                  Meeting ID
                </p>
                <p className="text-lg text-charcoal font-mono">
                  993 2352 5167
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-charcoal uppercase tracking-widest">
                  Passcode
                </p>
                <p className="text-lg text-charcoal font-mono">
                  999457
                </p>
              </div>
            </div>

            <a
              href="https://zoom.us/j/99323525167?pwd=IFLlnhDpDlaoHJba0bX9dJMJdubPph.1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 serif-heading uppercase tracking-widest text-sm rounded"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M11.5 2a4.5 4.5 0 0 1 4.5 4.5v1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2v-1a4.5 4.5 0 0 1 4.5-4.5z" />
              </svg>
              Join Zoom Meeting
            </a>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 p-6 border-l-4 border-champagne bg-champagne/5 rounded">
          <p className="text-warm-gray leading-relaxed">
            <span className="font-semibold text-charcoal">Technical Support:</span> If you experience any difficulties accessing the Zoom meeting, please contact the family on +27 (0) 60 916 4067 for assistance.
          </p>
        </div>
      </div>
    </section>
  );
}
