import WarehousePanel from './pages/WarehousePanel';
import { LayoutGrid, ClipboardList, Send, AlertCircle, BarChart3 } from 'lucide-react';

function App() {
  return (
    <div className="flex min-h-screen font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0a192f] text-gray-400 p-6 flex flex-col">
        <div className="mb-10">
          <h2 className="text-white font-bold text-xl flex items-center gap-2">
            <div className="p-1 bg-teal-500 rounded">📦</div> PDS Track
          </h2>
          <p className="text-xs text-orange-400 mt-1">Warehouse Mgr.</p>
        </div>
        
        <nav className="space-y-2 flex-1">
          <NavItem icon={<LayoutGrid size={20}/>} label="Inventory" />
          <NavItem icon={<Send size={20}/>} label="Shipments" active />
          <NavItem icon={<AlertCircle size={20}/>} label="Alerts" />
          <NavItem icon={<BarChart3 size={20}/>} label="Reports" />
        </nav>
      </aside>

      <WarehousePanel />
    </div>
  );
}

const NavItem = ({ icon, label, active }) => (
  <div className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${active ? 'bg-teal-600 text-white' : 'hover:bg-white/5'}`}>
    {icon} <span>{label}</span>
  </div>
);

export default App;