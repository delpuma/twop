
"use client";
import { useState } from "react";

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [a, setA] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function ask() {
    if (!q.trim()) return;
    setLoading(true);
    setA(null);
    const res = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ q })
    });
    const j = await res.json().catch(() => ({}));
    setA(j.answer ?? "Sorry — I couldn't answer that. Please use the contact form.");
    setLoading(false);
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open ? (
        <div className="w-80 bg-white border border-slate-200 shadow-xl rounded-xl overflow-hidden">
          <div className="px-4 py-3 bg-slate-900 text-white flex justify-between items-center">
            <div className="font-semibold text-sm">Ask about the project</div>
            <button onClick={() => setOpen(false)} className="text-white/90 hover:text-white text-sm">✕</button>
          </div>
          <div className="p-3">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Type a question…"
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm"
            />
            <button
              onClick={ask}
              disabled={loading}
              className="mt-2 w-full rounded-md bg-blue-700 text-white py-2 text-sm hover:bg-blue-600 disabled:opacity-50"
            >
              {loading ? "Thinking…" : "Ask"}
            </button>
            {a ? <div className="mt-3 text-sm text-slate-800 whitespace-pre-wrap">{a}</div> : null}
            <div className="mt-3 text-xs text-slate-500">
              For urgent needs, please use the <a className="underline" href="/get-help">Get Help</a> page.
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="rounded-full bg-slate-900 text-white px-4 py-3 shadow-lg hover:bg-slate-800"
          aria-label="Open AI assistant"
        >
          Ask
        </button>
      )}
    </div>
  );
}
