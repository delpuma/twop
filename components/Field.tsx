
export default function Field({ label, children }:{ label: string; children: React.ReactNode }){
  return (
    <label className="block">
      <div className="text-sm text-slate-700 mb-1">{label}</div>
      {children}
    </label>
  );
}
