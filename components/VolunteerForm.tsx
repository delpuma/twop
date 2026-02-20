
"use client";
import { useState } from "react";

export default function VolunteerForm(){
  const [status,setStatus]=useState<"idle"|"loading"|"ok"|"err">("idle");
  const [msg,setMsg]=useState("");
  async function submit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    setStatus("loading"); setMsg("");
    const form=new FormData(e.currentTarget);
    const payload={
      fullName:String(form.get("fullName")||""),
      email:String(form.get("email")||""),
      phone:String(form.get("phone")||""),
      interests:String(form.get("interests")||""),
      availability:String(form.get("availability")||"")
    };
    const res = await fetch("/api/volunteers",{method:"POST",headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
    if(res.ok){ setStatus("ok"); setMsg("Thanks — we’ll follow up shortly."); (e.currentTarget as HTMLFormElement).reset(); }
    else { setStatus("err"); setMsg("Something went wrong. Please try again."); }
  }
  return (
    <form onSubmit={submit} className="space-y-3">
      <input name="fullName" required className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Full name"/>
      <div className="grid md:grid-cols-2 gap-3">
        <input name="email" type="email" required className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Email"/>
        <input name="phone" className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Phone (optional)"/>
      </div>
      <input name="interests" className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="How would you like to help? (events, outreach, trades, admin…)"/>
      <input name="availability" className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Availability (days/times)"/>
      <button disabled={status==="loading"} className="w-full rounded-md bg-blue-700 text-white py-2 hover:bg-blue-600 disabled:opacity-50">
        {status==="loading" ? "Submitting…" : "Sign Up to Volunteer"}
      </button>
      {msg ? <p className={`text-sm ${status==="err" ? "text-red-600" : "text-green-700"}`}>{msg}</p> : null}
    </form>
  );
}
