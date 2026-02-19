import React from 'react';
import { Home, Store, ClipboardList, Bell, LogOut, LayoutGrid } from 'lucide-react';
import UserHeader from '../components/Citizen/UserHeader';
import QuotaCard from '../components/Citizen/QuotaCard';
import ShopStatus from '../components/Citizen/ShopStatus';
import UsageTracker from '../components/Citizen/UsageTracker';

const CitizenPortal = () => {
  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      {/* 1. Permanent Desktop Sidebar */}
      <aside className="w-72 bg-[#0b1120] text-slate-400 flex flex-col hidden xl:flex">
        <div className="p-8">
          <div className="flex items-center gap-3 text-white mb-10">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center font-black">PDS</div>
            <span className="text-xl font-bold tracking-tight">Citizen Portal</span>
          </div>
          
          <nav className="space-y-2">
            <SidebarLink Icon={Home} label="Dashboard" active />
            <SidebarLink Icon={Store} label="Nearby Shops" />
            <SidebarLink Icon={ClipboardList} label="Order History" />
            <SidebarLink Icon={Bell} label="Alerts" count={2} />
          </nav>
        </div>

        <div className="mt-auto p-8">
          <button className="flex items-center gap-3 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
            <LogOut size={18} /> Switch Role
          </button>
        </div>
      </aside>

      {/* 2. Main Wide Content Area */}
      <div className="flex-grow flex flex-col">
        <UserHeader 
          name="Ravi Kumar" 
          cardId="BPL-00423" 
          category="BPL Category" 
          familyCount={4} 
        />

        <main className="p-10 max-w-[1400px] mx-auto w-full space-y-8">
          {/* Top Row: Important Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <QuotaCard item="Rice" amount="22 kg" color="orange" />
            <QuotaCard item="Wheat" amount="68 kg" color="green" />
          </div>

          {/* Middle Row: Shop Details */}
          <ShopStatus 
            shopName="Rajiv Nagar PDS Shop"
            distance="0.3 km"
            status="Open Now"
            timings="9 AM - 5 PM"
            stock={{ rice: 22, wheat: 68, sugar: 12 }}
          />

          {/* Bottom Row: Detailed Consumption */}
          <UsageTracker 
            resetDate="1 March 2026"
            data={[
              { label: 'Rice', used: 10, total: 20, unit: 'kg' },
              { label: 'Wheat', used: 15, total: 35, unit: 'kg' },
              { label: 'Sugar', used: 1, total: 3, unit: 'kg' },
            ]}
          />
        </main>
      </div>
    </div>
  );
};

const SidebarLink = ({ Icon, label, active, count }) => (
  <button className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all ${active ? 'bg-emerald-500 text-white font-bold' : 'hover:bg-white/5'}`}>
    <div className="flex items-center gap-3">
      <Icon size={20} />
      <span>{label}</span>
    </div>
    {count && <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">{count}</span>}
  </button>
);

export default CitizenPortal;