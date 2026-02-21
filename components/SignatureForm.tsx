
"use client";
import { useState } from "react";

export default function SignatureForm({ onDone }:{ onDone?: ()=>void }){
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
      setStatus("ok"); setMsg("Thank you — your support has been recorded.");
      localStorage.setItem("vp_signed", "1");
      (e.currentTarget as HTMLFormElement).reset();
      onDone?.();
    } else {
      setStatus("err"); setMsg("Please check the form and try again.");
    }
  }

  return (
    <form onSubmit={submit} className="space-y-3">
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
      {msg ? <p className={`text-sm ${status==="err" ? "text-red-600" : "text-green-700"}`}>{msg}</p> : null}
    </form>
  );
}
