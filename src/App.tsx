import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      {/* Auth routes — no navbar/footer */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Main app routes — wrapped in shared Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        {/* পরে এখানে যোগ হবে: */}
        {/* <Route path="/vehicles" element={<VehicleList />} /> */}
        {/* <Route path="/vehicles/:vehicleId" element={<VehicleDetails />} /> */}
        {/* <Route path="/bookings" element={<MyBookings />} /> */}
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;