import React from 'react';
import { Bell, Search, UserCircle } from 'lucide-react';

const UserHeader = ({ name, cardId, category, familyCount }) => (
  <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between sticky top-0 z-40">
    <div className="flex items-center gap-4">
      <div className="hidden md:flex relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input 
          type="text" 
          placeholder="Search for items, shops, or alerts..." 
          className="pl-10 pr-4 py-2 bg-slate-100 rounded-xl text-sm w-80 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
        />
      </div>
    </div>

    <div className="flex items-center gap-6">
      <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
        <Bell size={22} />
        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
      </button>
      
      <div className="flex items-center gap-3 border-l pl-6 border-slate-200">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-bold text-slate-800">{name}</p>
          <p className="text-[10px] text-emerald-600 font-black uppercase tracking-widest">{category}</p>
        </div>
        <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-200">
          {name.charAt(0)}
        </div>
      </div>
    </div>
  </header>
);

export default UserHeader;