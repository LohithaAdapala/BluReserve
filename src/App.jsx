import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingManagement from "./components/BookingManagement";
import SeatMatrix from "./components/SeatMatrix";
import EmployeeDashboard from "./components/EmployeeDashboard";
import AdminPanel from "./components/AdminPanel";
import AdminView from "./components/AdminView";
import ManagerPanel from "./components/ManagerPanel";
import ManagerView from "./components/ManagerView";
import Login from "./components/login";
import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/seatmatrix" element={<SeatMatrix />} />
        <Route path="/booking" element={<BookingManagement />} />
        <Route path="/dashboard" element={<EmployeeDashboard />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/adminview" element={<AdminView />} />
        <Route path="/managerpanel" element={<ManagerPanel />} />
        <Route path="/managerview" element={<ManagerView/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/" element={<HomePage/>} />
        
      </Routes>
    </Router>
  );
}

export default App;