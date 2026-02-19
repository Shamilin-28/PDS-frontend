import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Warehouse, 
  Store, 
  Users, 
  LineChart, 
  Truck, 
  MapPin, 
  ClipboardCheck,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import bgImage from '../assets/bg.png'; 

const LandingPage = () => {
  const navigate = useNavigate();

  const headerStyle = {
    backgroundColor: '#0b1120',
    backgroundImage: `
      linear-gradient(to bottom, rgba(11, 17, 32, 0.8), rgba(226, 232, 240, 1)), 
      url(${bgImage})
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundBlendMode: 'overlay',
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans antialiased">
      
      {/* HEADER & HERO */}
      <header style={headerStyle} className="relative pt-24 px-4 border-b border-slate-200 pb-15">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#064e3b]/30 border border-emerald-500/30 text-emerald-400 text-[11px] uppercase tracking-widest font-bold mb-8 backdrop-blur-md">
            Government of India • PDS Transparency Initiative
          </div>
          
          <h1 className="text-6xl md:text-[80px] font-bold text-white tracking-tight leading-[1.1] mb-4">
            Public Distribution System
            <span className="block text-[#10b981] mt-1">Supply Chain Platform</span>
          </h1>
          
          <p className="text-slate-300 max-w-2xl mx-auto text-[18px] leading-relaxed mb-12 font-normal">
            Real-time visibility from warehouse to citizen. Track stock, predict shortages, 
            and ensure every family gets their fair share.
          </p>

          <div className="w-full max-w-3xl mx-auto border-t border-slate-700/50 my-10" />

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-6 text-slate-400">
            <StatItem Icon={Warehouse} value="24" label="Warehouses" />
            <StatItem Icon={Store} value="1,847" label="Ration Shops" />
            <StatItem Icon={Users} value="4.2M" label="Citizens" />
            <div className="flex items-center gap-3 text-[#10b981] font-bold text-sm tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              REAL-TIME TRACKING
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-[1200px] mx-auto px-6 relative z-30 pb-20">
        
        <div className="text-center mb-12">
          <h2 className="text-[32px] font-bold text-[#1e293b] mb-2 mt-12">Select Your Role to Continue</h2>
          <p className="text-slate-500 text-[15px]">Each role provides a tailored dashboard with relevant tools and data</p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <RoleCard 
            title="Government Admin" variant="admin" path="/admin" Icon={ShieldCheck}
            description="State-level oversight of the entire PDS supply chain"
            features={["Analytics & predictions", "Warehouse monitoring", "Complaint management", "Shipment tracking"]}
          />
          <RoleCard 
            title="Warehouse Manager" variant="warehouse" path="/warehouse" Icon={Warehouse}
            description="Manage stock levels and dispatch shipments"
            features={["Inventory management", "Create & dispatch shipments", "QR scan verification", "Low-stock alerts"]}
          />
          <RoleCard 
            title="Ration Shop Dealer" variant="dealer" path="/dealer" Icon={Store}
            description="Manage your shop inventory and process citizen sales"
            features={["Shop inventory", "Incoming shipments", "Process sales", "Customer history"]}
          />
          <RoleCard 
            title="Citizen Portal" variant="citizen" path="/citizen" Icon={Users}
            description="Check stock, pre-order rations and raise complaints"
            features={["Nearby shops & stock", "Pre-order tokens", "Order history", "Raise complaints"]}
          />
        </div>

        {/* Capabilities Container */}
        <div className="bg-white rounded-[24px] shadow-[0_10px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 p-16 text-center">
            <p className="text-[13px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-14">
                Platform Capabilities
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Feature Icon={LineChart} title="AI Demand Prediction" desc="Forecast stockouts before they happen" />
                <Feature Icon={Truck} title="Live Shipment Tracking" desc="GPS-enabled end-to-end visibility" />
                <Feature Icon={MapPin} title="Geo-Shop Locator" desc="Citizens find nearest ration shop" />
                <Feature Icon={ClipboardCheck} title="Complaint Resolution" desc="Transparent grievance management" />
            </div>
        </div>
      </main>

      <footer className="py-10 text-center">
        <p className="text-[12px] text-slate-400 font-medium">
          PDS Track v1.0 • Built under <span className="text-slate-900 font-bold">Connected Systems for Public Infrastructure</span> • Hackathon 2026
        </p>
      </footer>
    </div>
  );
};

// --- Sub-Components (FIXED PROPS) ---

const StatItem = ({ Icon, value, label }) => (
    <div className="flex items-center gap-3 group">
        <Icon size={18} className="text-slate-500" />
        <div className="flex items-baseline gap-1.5">
            <span className="text-white font-bold text-xl tracking-tight">{value}</span>
            <span className="text-[12px] font-medium text-slate-500 uppercase tracking-wide">{label}</span>
        </div>
    </div>
);

const RoleCard = ({ title, description, features, variant, path, Icon }) => {
  const navigate = useNavigate();
  const styles = {
    admin: { bg: "bg-[#f0fdfa]", border: "border-[#ccfbf1]", iconBg: "bg-[#ccfbf1]", iconCol: "text-[#0d9488]", btnCol: "text-[#0d9488]" },
    warehouse: { bg: "bg-[#fffbeb]", border: "border-[#fef3c7]", iconBg: "bg-[#fef3c7]", iconCol: "text-[#d97706]", btnCol: "text-[#d97706]" },
    dealer: { bg: "bg-[#eff6ff]", border: "border-[#dbeafe]", iconBg: "bg-[#dbeafe]", iconCol: "text-[#2563eb]", btnCol: "text-[#2563eb]" },
    citizen: { bg: "bg-[#f0fdf4]", border: "border-[#dcfce7]", iconBg: "bg-[#dcfce7]", iconCol: "text-[#16a34a]", btnCol: "text-[#16a34a]" },
  };

  return (
    <div 
      onClick={() => navigate(path)}
      className={`group ${styles[variant].bg} p-8 rounded-[20px] border ${styles[variant].border} flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer min-h-[420px]`}
    >
      <div className={`w-12 h-12 mb-6 rounded-xl ${styles[variant].iconBg} flex items-center justify-center transition-transform group-hover:scale-110`}>
        <Icon className={styles[variant].iconCol} size={24} />
      </div>
      <h3 className="font-bold text-[#1e293b] text-xl mb-3">{title}</h3>
      <p className="text-slate-500 text-[14px] leading-relaxed mb-6 font-medium">{description}</p>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((f, i) => (
          <li key={i} className="flex items-center text-[13px] font-medium text-slate-600">
            <CheckCircle2 size={14} className={`${styles[variant].iconCol} mr-3 opacity-60`} /> {f}
          </li>
        ))}
      </ul>

      <div className={`text-[15px] font-bold flex items-center ${styles[variant].btnCol} group-hover:underline`}>
        Enter Dashboard <ArrowRight size={16} className="ml-2" />
      </div>
    </div>
  );
};

const Feature = ({ Icon, title, desc }) => (
  <div className="flex flex-col items-center">
    <div className="w-14 h-14 bg-[#f1f5f9] rounded-2xl flex items-center justify-center mb-6">
      <Icon size={24} className="text-[#0d9488]" />
    </div>
    <h4 className="font-bold text-[#1e293b] text-[15px] mb-2">{title}</h4>
    <p className="text-[13px] text-slate-500 leading-snug max-w-[180px] font-medium">{desc}</p>
  </div>
);

export default LandingPage;