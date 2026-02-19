import React from 'react';
import { Calendar } from 'lucide-react';

const UsageTracker = ({ resetDate, data }) => (
  <section className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
    <div className="flex justify-between items-center mb-10">
      <h3 className="text-2xl font-bold text-slate-800 tracking-tight">February Quota Usage</h3>
      <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest">
        <Calendar size={14} /> Resets in 8 days
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {data.map((item, idx) => {
        const percent = Math.round((item.used / item.total) * 100);
        return (
          <div key={idx} className="relative pt-2">
            <div className="flex justify-between items-end mb-4">
              <div>
                <span className="block text-lg font-bold text-slate-800">{item.label}</span>
                <span className="text-xs text-slate-400 font-medium tracking-tight">Monthly Limit: {item.total}{item.unit}</span>
              </div>
              <div className="text-right">
                <span className="text-xl font-black text-slate-900 leading-none">{item.used}</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase ml-1">{item.unit}</span>
              </div>
            </div>
            <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500 rounded-full transition-all duration-1000" 
                style={{ width: `${percent}%` }} 
              />
            </div>
            <p className="mt-3 text-[11px] font-black text-emerald-600 uppercase tracking-widest text-right">
              {percent}% LIFTED
            </p>
          </div>
        );
      })}
    </div>
    <div className="mt-12 text-center py-4 bg-emerald-50 rounded-2xl text-emerald-700 text-sm font-medium">
      Reminder: Please collect your remaining grains before <strong>{resetDate}</strong>
    </div>
  </section>
);

export default UsageTracker;