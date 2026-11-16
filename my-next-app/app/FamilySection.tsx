"use client";

import FloralAccent from "./FloralAccent";

interface FamilyMember {
  name: string;
  relationship: string;
  quote?: string;
}

export default function FamilySection({
  familyMembers,
}: {
  familyMembers: FamilyMember[];
}) {
  return (
    <section className="py-20 md:py-32 bg-ivory">
      <FloralAccent
        size={140}
        className="absolute top-20 right-10 opacity-15"
      />

      <div className="mx-auto max-w-5xl px-6 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="serif-display text-5xl md:text-6xl text-charcoal">
            Family & Loved Ones
          </h2>
          <div className="divider-line w-24 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {familyMembers.map((member, i) => (
            <div
              key={i}
              className="text-center space-y-3 p-6 border border-champagne/20 hover:border-champagne/40 transition-colors duration-300 rounded-lg bg-white/30 backdrop-blur-sm"
            >
              <h3 className="serif-heading text-xl text-charcoal">
                {member.name}
              </h3>
              <p className="text-sm uppercase tracking-widest text-champagne">
                {member.relationship}
              </p>
              {member.quote && (
                <p className="italic text-warm-gray text-sm pt-2">
                  "{member.quote}"
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
