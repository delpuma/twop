
"use client";
import { useState } from "react";
import Container from "../../components/Container";

export default function GetHelp(){
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
      branch:String(form.get("branch")||""),
      needs: form.getAll("needs"),
      isHomeless: String(form.get("isHomeless")||""),
      urgentMedical: String(form.get("urgentMedical")||""),
      location:String(form.get("location")||""),
      notes:String(form.get("notes")||"")
    };
    const res=await fetch("/api/intake",{method:"POST",headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
    if(res.ok){ setStatus("ok"); setMsg("Request received. Someone will contact you as soon as possible."); (e.currentTarget as HTMLFormElement).reset(); }
    else { setStatus("err"); setMsg("Something went wrong. Please try again or use the contact page."); }
  }

  return (
    <main>
      <section className="bg-white border-b border-slate-200">
        <Container className="py-14">
          <h1 className="text-4xl font-semibold tracking-tight">Get Help (Veterans)</h1>
          <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
            If you are a veteran who needs help with housing, basic necessities, healthcare navigation, or a path to work — start here.
            This form helps us triage and connect you to the right partner quickly.
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-12 max-w-3xl">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <form onSubmit={submit} className="space-y-3">
              <input name="fullName" required className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Full name" />
              <div className="grid md:grid-cols-2 gap-3">
                <input name="email" type="email" className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Email (optional)" />
                <input name="phone" className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Phone" />
              </div>
              <select name="branch" className="w-full rounded-md border border-slate-300 px-3 py-2">
                <option value="">Branch of service (optional)</option>
                <option>Army</option><option>Navy</option><option>Air Force</option><option>Marines</option><option>Coast Guard</option><option>Space Force</option><option>Other</option>
              </select>

              <div className="rounded-lg bg-slate-50 border border-slate-200 p-4">
                <div className="font-semibold text-sm">What do you need help with?</div>
                <div className="mt-2 grid gap-2">
                  {["Housing","Food / clothing","Healthcare navigation","Job / training","Transportation","Benefits / paperwork"].map((x)=>(
                    <label key={x} className="flex items-center gap-2 text-sm text-slate-700">
                      <input type="checkbox" name="needs" value={x} className="h-4 w-4" /> {x}
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <select name="isHomeless" required className="w-full rounded-md border border-slate-300 px-3 py-2">
                  <option value="">Currently homeless?</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="at-risk">At risk</option>
                </select>
                <select name="urgentMedical" required className="w-full rounded-md border border-slate-300 px-3 py-2">
                  <option value="">Urgent medical need?</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <input name="location" className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Current location (city/area)" />
              <textarea name="notes" rows={4} className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Anything else you'd like us to know?" />

              <button disabled={status==="loading"} className="w-full rounded-md bg-blue-700 text-white py-2 hover:bg-blue-600 disabled:opacity-50">
                {status==="loading" ? "Submitting…" : "Request Help"}
              </button>
              {msg ? <p className={`text-sm ${status==="err" ? "text-red-600" : "text-green-700"}`}>{msg}</p> : null}
            </form>

            <p className="mt-4 text-xs text-slate-500">
              If you are in immediate danger or experiencing a crisis, call 911. If you are a veteran in crisis, you can also contact the Veterans Crisis Line (988, then press 1).
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
