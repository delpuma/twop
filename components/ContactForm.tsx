
"use client";
import { useState } from "react";

export default function ContactForm(){
  const [status,setStatus]=useState<"idle"|"loading"|"ok"|"err">("idle");
  const [msg,setMsg]=useState("");
  async function submit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    setStatus("loading"); setMsg("");
    const form=new FormData(e.currentTarget);
    const payload={
      fullName:String(form.get("fullName")||""),
      email:String(form.get("email")||""),
      topic:String(form.get("topic")||""),
      message:String(form.get("message")||"")
    };
    const res = await fetch("/api/contact",{method:"POST",headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
    if(res.ok){ setStatus("ok"); setMsg("Thanks — we’ll reply soon."); (e.currentTarget as HTMLFormElement).reset(); }
    else { setStatus("err"); setMsg("Something went wrong. Please try again."); }
  }
  return (
    <form onSubmit={submit} className="space-y-3">
      <input name="fullName" required className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Full name"/>
      <input name="email" type="email" required className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Email"/>
      <select name="topic" required className="w-full rounded-md border border-slate-300 px-3 py-2">
        <option value="">Select a topic</option>
        <option>Victory Pointe Initiative</option>
        <option>Sponsorship</option>
        <option>Volunteer</option>
        <option>Veteran Services</option>
        <option>Media</option>
        <option>Other</option>
      </select>
      <textarea name="message" rows={5} required className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Message"/>
      <button disabled={status==="loading"} className="w-full rounded-md bg-slate-900 text-white py-2 hover:bg-slate-800 disabled:opacity-50">
        {status==="loading" ? "Submitting…" : "Send Message"}
      </button>
      {msg ? <p className={`text-sm ${status==="err" ? "text-red-600" : "text-green-700"}`}>{msg}</p> : null}
    </form>
  );
}
