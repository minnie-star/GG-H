"use client";

import { useState } from "react";
import FloralAccent from "./FloralAccent";

interface Tribute {
  author: string;
  relationship: string;
  message: string;
  date: string;
}

export default function Tributes({ initialTributes }: { initialTributes: Tribute[] }) {
  const [tributes, setTributes] = useState<Tribute[]>(initialTributes);
  const [formData, setFormData] = useState({
    author: "",
    relationship: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.author && formData.message) {
      const newTribute: Tribute = {
        ...formData,
        date: new Date().toLocaleDateString(),
      };
      setTributes([newTribute, ...tributes]);
      setFormData({ author: "", relationship: "", message: "" });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-white/40 backdrop-blur-sm">
      <FloralAccent
        size={170}
        className="absolute top-20 left-0 opacity-15"
      />

      <div className="mx-auto max-w-4xl px-6 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="serif-display text-5xl md:text-6xl text-charcoal">
            Tributes & Condolences
          </h2>
          <div className="divider-line w-24 mx-auto" />
          <p className="text-warm-gray">
            Share your memories and heartfelt messages
          </p>
        </div>

        {/* Tribute Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 p-8 border border-champagne/30 bg-ivory rounded-lg"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.author}
              onChange={(e) =>
                setFormData({ ...formData, author: e.target.value })
              }
              className="px-4 py-2 border border-warm-gray/30 bg-white rounded text-charcoal placeholder-warm-gray/60"
              required
            />
            <input
              type="text"
              placeholder="Your Relationship (e.g., Friend, Family)"
              value={formData.relationship}
              onChange={(e) =>
                setFormData({ ...formData, relationship: e.target.value })
              }
              className="px-4 py-2 border border-warm-gray/30 bg-white rounded text-charcoal placeholder-warm-gray/60"
            />
          </div>
          <textarea
            placeholder="Share your memory or message of condolence..."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            rows={4}
            className="w-full px-4 py-2 border border-warm-gray/30 bg-white rounded text-charcoal placeholder-warm-gray/60"
            required
          />
          <button
            type="submit"
            className="px-8 py-2 bg-champagne text-charcoal hover:bg-champagne/80 transition-colors duration-300 serif-heading uppercase tracking-widest text-sm rounded"
          >
            Share Tribute
          </button>
        </form>

        {/* Tributes List */}
        <div className="space-y-6">
          {tributes.map((tribute, i) => (
            <div
              key={i}
              className="p-6 border border-champagne/20 bg-white/50 backdrop-blur-sm rounded-lg hover:border-champagne/40 transition-colors duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="serif-heading text-lg text-charcoal">
                    {tribute.author}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-champagne">
                    {tribute.relationship}
                  </p>
                </div>
                <p className="text-xs text-warm-gray">{tribute.date}</p>
              </div>
              <p className="text-charcoal/80 leading-relaxed italic">
                "{tribute.message}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
