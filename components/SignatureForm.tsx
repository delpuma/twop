
"use client";
import { useState } from "react";

const FB_SHARE = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftwop.vercel.app%2Fvictory-pointe&quote=I+just+signed+the+Victory+Pointe+petition+to+support+veterans+in+Clermont%2C+FL.+Add+your+name+%E2%86%92";

export default function SignatureForm({ onDone, supporters }:{ onDone?: ()=>void; supporters?: number }){
  const [status,setStatus]=useState<"idle"|"loading"|"ok"|"err">("idle");
  const [msg,setMsg]=useState<string>("");

  async function submit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    setStatus("loading"); setMsg("");
    const form = new FormData(e.currentTarget);
    const payload = {
      fullName: String(form.get("fullName")||""),
      email: String(form.get("email")||""),
      zip: String(form.get("zip")||""),
      isResident: form.get("isResident")==="on",
      comment: String(form.get("comment")||"")
    };
    const res = await fetch("/api/signatures",{method:"POST",headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
    if(res.ok){
      setStatus("ok");
      localStorage.setItem("vp_signed", "1");
      (e.currentTarget as HTMLFormElement).reset();
      onDone?.();
    } else {
      setStatus("err"); setMsg("Please check the form and try again.");
    }
  }

  if (status === "ok") return (
    <div className="text-center py-4 space-y-4">
      <div className="text-4xl">✅</div>
      <div className="font-bold text-green-700 text-lg">Thank you — your support has been recorded.</div>
      <p className="text-sm text-slate-600">Help us reach more people — share this with your network.</p>
      <a href={FB_SHARE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#1877F2] text-white font-semibold px-5 py-2.5 hover:bg-[#166fe5] transition-colors text-sm">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
        Share on Facebook
      </a>
    </div>
  );

  return (
    <form onSubmit={submit} className="space-y-3">
      {supporters !== undefined && supporters > 0 && (
        <div className="rounded-lg bg-amber-50 border border-amber-200 px-3 py-2 text-sm text-amber-800 font-medium">
          🙌 {supporters.toLocaleString()} people have already signed — add your name.
        </div>
      )}
      <input name="fullName" required className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Full name"/>
      <input name="email" type="email" required className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Email"/>
      <div className="grid md:grid-cols-2 gap-3">
        <input name="zip" required className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="ZIP code"/>
        <label className="flex items-center gap-2 text-sm text-slate-700">
          <input name="isResident" type="checkbox" className="h-4 w-4" />
          I live in Clermont / nearby
        </label>
      </div>
      <textarea name="comment" rows={3} className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Optional comment"/>
      <button disabled={status==="loading"} className="w-full rounded-md bg-blue-700 text-white py-2 hover:bg-blue-600 disabled:opacity-50">
        {status==="loading" ? "Submitting…" : "Sign Support"}
      </button>
      {status === "err" && msg && <p className="text-sm text-red-600">{msg}</p>}
    </form>
  );
}
