
"use client";
import { useState } from "react";

export default function LetterUpload(){
  const [status,setStatus]=useState<"idle"|"loading"|"ok"|"err">("idle");
  const [msg,setMsg]=useState("");

  async function submit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    setStatus("loading"); setMsg("");
    const form = e.currentTarget;
    const fd = new FormData(form);
    const res = await fetch("/api/letters", { method: "POST", body: fd });
    if(res.ok){ setStatus("ok"); setMsg("Uploaded — thank you for supporting the project."); form.reset(); }
    else { setStatus("err"); setMsg("Upload failed. Please try again."); }
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <input name="orgName" required className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Organization / Name"/>
      <input name="contact" required className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Contact person"/>
      <input name="email" type="email" required className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Email"/>
      <input name="file" type="file" accept=".pdf,.doc,.docx,.png,.jpg,.jpeg" required className="w-full rounded-md border border-slate-300 px-3 py-2 bg-white"/>
      <button disabled={status==="loading"} className="w-full rounded-md bg-blue-700 text-white py-2 hover:bg-blue-600 disabled:opacity-50">
        {status==="loading" ? "Uploading…" : "Upload Letter of Support"}
      </button>
      {msg ? <p className={`text-sm ${status==="err" ? "text-red-600" : "text-green-700"}`}>{msg}</p> : null}
      <p className="text-xs text-slate-500">
        Files are stored securely. We may share aggregate counts and (with permission) supporter logos/names.
      </p>
    </form>
  );
}
