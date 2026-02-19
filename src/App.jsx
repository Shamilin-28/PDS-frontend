import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

// Placeholder Components for routes
const AdminDash = () => <div className="p-20 text-center">Admin Dashboard Content</div>;
const WarehouseDash = () => <div className="p-20 text-center">Warehouse Management Content</div>;
const DealerDash = () => <div className="p-20 text-center">Ration Shop Dealer Content</div>;
const CitizenDash = () => <div className="p-20 text-center">Citizen Portal Content</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminDash />} />
        <Route path="/warehouse" element={<WarehouseDash />} />
        <Route path="/dealer" element={<DealerDash />} />
        <Route path="/citizen" element={<CitizenDash />} />
      </Routes>
    </Router>
  );
}

export default App;