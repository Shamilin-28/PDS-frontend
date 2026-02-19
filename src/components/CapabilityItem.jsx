export const CapabilityItem = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center text-center p-4">
    <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-4 text-2xl text-teal-500">
      {icon}
    </div>
    <h4 className="font-bold text-slate-800 text-sm mb-1">{title}</h4>
    <p className="text-xs text-slate-500 max-w-[150px] leading-normal">{desc}</p>
  </div>
);