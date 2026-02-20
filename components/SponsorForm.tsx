
"use client";
import { useState } from "react";

export default function SponsorForm(){
  const [status,setStatus]=useState<"idle"|"loading"|"ok"|"err">("idle");
  const [msg,setMsg]=useState("");
  async function submit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    setStatus("loading"); setMsg("");
    const form=new FormData(e.currentTarget);
    const payload={
      orgName:String(form.get("orgName")||""),
      contact:String(form.get("contact")||""),
      email:String(form.get("email")||""),
      phone:String(form.get("phone")||""),
      pledgedAmount: Number(form.get("pledgedAmount")||0),
      interest:String(form.get("interest")||""),
      message:String(form.get("message")||"")
    };
    const res = await fetch("/api/sponsors",{method:"POST",headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
    if(res.ok){ setStatus("ok"); setMsg("Thanks — we’ll follow up shortly."); (e.currentTarget as HTMLFormElement).reset(); }
    else { setStatus("err"); setMsg("Something went wrong. Please try again."); }
  }
  return (
    <form onSubmit={submit} className="space-y-3">
      <input name="orgName" required className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Organization / Business name"/>
      <div className="grid md:grid-cols-2 gap-3">
        <input name="contact" required className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Contact name"/>
        <input name="email" type="email" required className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Email"/>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        <input name="phone" className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Phone (optional)"/>
        <input name="pledgedAmount" type="number" min="0" step="1" className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Estimated pledge $ (optional)"/>
      </div>
      <select name="interest" required className="w-full rounded-md border border-slate-300 px-3 py-2">
        <option value="">Select sponsorship interest</option>
        <option>Station Naming Sponsor</option>
        <option>Honor Plaza Sponsor</option>
        <option>Veteran Housing & Training Partner</option>
        <option>Skilled Trades & Workforce Sponsor</option>
        <option>Community Builder Sponsor</option>
        <option>Other</option>
      </select>
      <textarea name="message" rows={4} className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Message / questions"/>
      <button disabled={status==="loading"} className="w-full rounded-md bg-slate-900 text-white py-2 hover:bg-slate-800 disabled:opacity-50">
        {status==="loading" ? "Submitting…" : "Submit Sponsor Interest"}
      </button>
      {msg ? <p className={`text-sm ${status==="err" ? "text-red-600" : "text-green-700"}`}>{msg}</p> : null}
    </form>
  );
}
