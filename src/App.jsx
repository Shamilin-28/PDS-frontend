import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CitizenPortal from './pages/CitizenPortal'; // Import the new page

// Remaining Placeholder Components
const AdminDash = () => <div className="p-20 text-center">Admin Dashboard Content</div>;
const WarehouseDash = () => <div className="p-20 text-center">Warehouse Management Content</div>;
const DealerDash = () => <div className="p-20 text-center">Ration Shop Dealer Content</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminDash />} />
        <Route path="/warehouse" element={<WarehouseDash />} />
        <Route path="/dealer" element={<DealerDash />} />
        <Route path="/citizen" element={<CitizenPortal />} />
      </Routes>
    </Router>
  );
}

export default App;