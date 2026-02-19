import React from 'react';
import { useNavigate } from 'react-router-dom';

// --- Sub-Components ---
const RoleCard = ({ title, description, features, variant, path }) => {
  const navigate = useNavigate();
  
  const styles = {
    admin: "bg-[#f0f9fa] border-cyan-100",
    warehouse: "bg-[#fff9f0] border-orange-100",
    dealer: "bg-[#f0f4ff] border-blue-100",
    citizen: "bg-[#f0faf4] border-emerald-100",
  };

  return (
    <div 
      onClick={() => navigate(path)}
      className={`p-8 rounded-2xl border ${styles[variant]} flex flex-col transition-all hover:shadow-xl hover:-translate-y-2 cursor-pointer group animate-fadeIn`}
    >
      <div className="w-10 h-10 mb-5 rounded-xl bg-white shadow-sm flex items-center justify-center text-xl">
        {variant === 'admin' && '🛡️'}
        {variant === 'warehouse' && '📦'}
        {variant === 'dealer' && '🏪'}
        {variant === 'citizen' && '👥'}
      </div>
      <h3 className="font-bold text-slate-800 text-lg mb-2">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((item, idx) => (
          <li key={idx} className="flex items-start text-sm text-slate-600">
            <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      <div className="text-sm font-bold text-teal-600 flex items-center group-hover:underline">
        Enter Dashboard <span className="ml-2">→</span>
      </div>
    </div>
  );
};

// --- Main Page ---
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-emerald-100">
      
      {/* HEADER & HERO */}
      <header className="relative bg-[#0b1120] overflow-hidden pt-20 pb-40 px-6">
        {/* Subtle wheat/grain pattern overlay effect */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] uppercase tracking-[0.2em] font-bold mb-10">
            Government of India • PDS Transparency Initiative
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Public Distribution System
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 mt-2">
              Supply Chain Platform
            </span>
          </h1>
          
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed mb-12">
            Real-time visibility from warehouse to citizen. Track stock, predict shortages, 
            and ensure every family gets their fair share.
          </p>

          <div className="flex flex-wrap justify-center gap-10 text-slate-400 text-sm border-t border-white/10 pt-10">
            <div className="flex items-center gap-2">🏢 <span className="text-white font-bold">24</span> Warehouses</div>
            <div className="flex items-center gap-2">🏪 <span className="text-white font-bold">1,847</span> Ration Shops</div>
            <div className="flex items-center gap-2">👥 <span className="text-white font-bold">4.2M</span> Citizens</div>
            <div className="flex items-center gap-2 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Real-time Tracking
            </div>
          </div>
        </div>
      </header>

      {/* ROLES SECTION */}
      <main className="max-w-7xl mx-auto px-6 -mt-24 relative z-20 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Select Your Role to Continue</h2>
          <p className="text-slate-500 text-sm">Access your specialized portal based on your credentials</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          <RoleCard 
            variant="admin" path="/admin"
            title="Government Admin"
            description="State-level oversight of the entire PDS supply chain"
            features={["Analytics & predictions", "Warehouse monitoring", "Complaint management", "Shipment tracking"]}
          />
          <RoleCard 
            variant="warehouse" path="/warehouse"
            title="Warehouse Manager"
            description="Manage stock levels and dispatch shipments"
            features={["Inventory management", "Create & dispatch shipments", "QR scan verification", "Low stock alerts"]}
          />
          <RoleCard 
            variant="dealer" path="/dealer"
            title="Ration Shop Dealer"
            description="Manage your shop inventory and process citizen sales"
            features={["Shop inventory", "Incoming shipments", "Process sales", "Customer history"]}
          />
          <RoleCard 
            variant="citizen" path="/citizen"
            title="Citizen Portal"
            description="Check stock, pre-order rations and raise complaints"
            features={["Nearby shops & stock", "Pre-order tokens", "Order history", "Raise complaints"]}
          />
        </div>

        {/* FEATURES BOX */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100 p-12 md:p-16">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-16">
            Core Platform Capabilities
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <Feature icon="📊" title="AI Demand Prediction" desc="Forecast stockouts before they happen" />
            <Feature icon="🚚" title="Live Shipment Tracking" desc="GPS enabled end-to-end visibility" />
            <Feature icon="📍" title="Geo-Shop Locator" desc="Citizens find nearest ration shop" />
            <Feature icon="🛡️" title="Complaint Resolution" desc="Transparent grievance management" />
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="py-12 border-t border-slate-100 text-center bg-slate-50/50">
        <p className="text-[11px] text-slate-400 font-medium uppercase tracking-widest">
          PDS Track v1.0 • Built under <span className="text-slate-800 font-bold">Connected Systems for Public Infrastructure</span> | Hackathon 2026
        </p>
      </footer>
    </div>
  );
};

const Feature = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center text-center">
    <div className="text-3xl mb-4">{icon}</div>
    <h4 className="font-bold text-slate-800 text-sm mb-2">{title}</h4>
    <p className="text-xs text-slate-500 max-w-[140px] leading-relaxed">{desc}</p>
  </div>
);

export default LandingPage;