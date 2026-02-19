import React from 'react';
import { MapPin, Clock, Phone, ShoppingBag, Star, Navigation } from 'lucide-react';

const ShopStatus = ({ shopName, distance, status, timings, stock }) => (
  <section className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
    <div className="flex flex-col lg:flex-row justify-between gap-8">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-emerald-100 text-emerald-700 text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" /> {status}
          </span>
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">{shopName}</h2>
        <div className="flex items-center gap-4 text-slate-500 text-sm mb-6 font-medium">
          <span className="flex items-center gap-1.5"><MapPin size={16}/> {distance} away</span>
          <span className="flex items-center gap-1.5"><Clock size={16}/> {timings}</span>
          <span className="flex items-center gap-1.5 text-amber-500 font-bold"><Star size={16} fill="currentColor"/> 4.2</span>
        </div>
        
        <div className="flex gap-3">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-emerald-200 transition-all flex items-center gap-2">
            <ShoppingBag size={20} /> Pre-Order Now
          </button>
          <button className="p-4 border border-slate-200 rounded-2xl text-slate-600 hover:bg-slate-50 transition-all">
            <Navigation size={20} />
          </button>
          <button className="p-4 border border-slate-200 rounded-2xl text-slate-600 hover:bg-slate-50 transition-all">
            <Phone size={20} />
          </button>
        </div>
      </div>

      <div className="lg:w-80 bg-slate-50 rounded-3xl p-6">
        <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Current Stock Levels</h4>
        <div className="space-y-5">
          <StockIndicator label="Rice" percent={stock.rice} color="bg-orange-400" />
          <StockIndicator label="Wheat" percent={stock.wheat} color="bg-emerald-500" />
          <StockIndicator label="Sugar" percent={stock.sugar} color="bg-red-500" />
        </div>
      </div>
    </div>
  </section>
);

const StockIndicator = ({ label, percent, color }) => (
  <div className="space-y-1.5">
    <div className="flex justify-between text-[11px] font-bold text-slate-600">
      <span>{label}</span>
      <span>{percent}%</span>
    </div>
    <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
      <div className={`h-full ${color} rounded-full`} style={{ width: `${percent}%` }} />
    </div>
  </div>
);

export default ShopStatus;