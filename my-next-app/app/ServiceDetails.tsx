"use client";

import FloralAccent from "./FloralAccent";

interface ServiceEvent {
  title: string;
  date: string;
  time: string;
  location: string;
  description?: string;
}

export default function ServiceDetails({
  events,
}: {
  events: ServiceEvent[];
}) {
  return (
    <section className="py-20 md:py-32 bg-ivory">
      <FloralAccent
        size={200}
        className="absolute bottom-20 right-0 opacity-15"
      />

      <div className="mx-auto max-w-5xl px-6 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="serif-display text-5xl md:text-6xl text-charcoal">
            Service & Memorial
          </h2>
          <div className="divider-line w-24 mx-auto" />
        </div>

        <div className="space-y-6">
          {events.map((event, i) => (
            <div
              key={i}
              className="grid md:grid-cols-[200px_1fr] gap-6 p-8 border-l-4 border-champagne bg-white/40 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="space-y-2">
                <h3 className="serif-heading text-xl text-charcoal">
                  {event.title}
                </h3>
                <p className="text-sm text-champagne font-semibold">
                  {event.date}
                </p>
                <p className="text-lg serif-heading text-charcoal">
                  {event.time}
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-warm-gray font-medium">{event.location}</p>
                {event.description && (
                  <p className="text-charcoal/80 leading-relaxed">
                    {event.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
