"use client";

import { useState, useEffect } from "react";
import FloralAccent from "./FloralAccent";

interface Tribute {
  _id?: string;
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetchTributes();
  }, []);

  const fetchTributes = async () => {
    try {
      const response = await fetch("/api/tributes");
      if (response.ok) {
        const data = await response.json();
        setTributes(data);
      }
    } catch (err) {
      console.error("Failed to fetch tributes:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!formData.author || !formData.message) {
      setError("Please fill in all required fields");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/tributes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit tribute");
      }

      const newTribute = await response.json();
      setTributes([newTribute, ...tributes]);
      setFormData({ author: "", relationship: "", message: "" });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      setError(err.message || "Failed to submit tribute. Please try again.");
    } finally {
      setLoading(false);
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
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded text-sm">
              {error}
            </div>
          )}
          {success && (
            <div className="p-3 bg-green-50 border border-green-200 text-green-700 rounded text-sm">
              ✓ Thank you! Your tribute has been shared.
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.author}
              onChange={(e) =>
                setFormData({ ...formData, author: e.target.value })
              }
              className="px-4 py-2 border border-warm-gray/30 bg-white rounded text-charcoal placeholder-warm-gray/60 disabled:opacity-50"
              required
              disabled={loading}
            />
            <input
              type="text"
              placeholder="Your Relationship (e.g., Friend, Family)"
              value={formData.relationship}
              onChange={(e) =>
                setFormData({ ...formData, relationship: e.target.value })
              }
              className="px-4 py-2 border border-warm-gray/30 bg-white rounded text-charcoal placeholder-warm-gray/60 disabled:opacity-50"
              disabled={loading}
            />
          </div>
          <textarea
            placeholder="Share your memory or message of condolence..."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            rows={4}
            className="w-full px-4 py-2 border border-warm-gray/30 bg-white rounded text-charcoal placeholder-warm-gray/60 disabled:opacity-50"
            required
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-2 bg-champagne text-charcoal hover:bg-champagne/80 disabled:bg-champagne/50 disabled:cursor-not-allowed transition-colors duration-300 serif-heading uppercase tracking-widest text-sm rounded"
          >
            {loading ? "Sharing..." : "Share Tribute"}
          </button>
        </form>

        {/* Tributes List */}
        <div className="space-y-6">
          {tributes.length === 0 ? (
            <p className="text-center text-charcoal/60 italic py-8">
              No tributes yet. Be the first to share a memory.
            </p>
          ) : (
            tributes.map((tribute) => (
              <div
                key={tribute._id || tribute.author}
                className="p-6 border border-champagne/20 bg-white/50 backdrop-blur-sm rounded-lg hover:border-champagne/40 transition-colors duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="serif-heading text-lg text-charcoal">
                      {tribute.author}
                    </h3>
                    {tribute.relationship && (
                      <p className="text-xs uppercase tracking-widest text-champagne">
                        {tribute.relationship}
                      </p>
                    )}
                  </div>
                  <p className="text-xs text-warm-gray">{tribute.date}</p>
                </div>
                <p className="text-charcoal/80 leading-relaxed italic">
                  "{tribute.message}"
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
