import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/employeeDashboard.css";

const EmployeeDashboard = () => {
  const navigate = useNavigate(); 
  const handleViewSeatAvailability = () => {
   
    navigate('/seatmatrix'); 
  };

  return (
    <div id="webcrumbs"> 
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                  <span className="material-symbols-outlined text-4xl text-white">person</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">John Smith</h2>
                  <p className="text-sm opacity-75">Software Engineer</p>
                </div>
              </div>
              <div className="space-y-4 divide-y divide-gray-100">
                <div className="flex justify-between items-center py-2">
                  <span className="opacity-75 flex items-center gap-2">
                    <span className="material-symbols-outlined">badge</span>
                    Employee ID
                  </span>
                  <span className="font-semibold">EMP001</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="opacity-75 flex items-center gap-2">
                    <span className="material-symbols-outlined">corporate_fare</span>
                    Department
                  </span>
                  <span className="font-semibold">Engineering</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="opacity-75 flex items-center gap-2">
                    <span className="material-symbols-outlined">supervisor_account</span>
                    Manager
                  </span>
                  <span className="font-semibold">Sarah Johnson</span>
                </div>
              </div>
              <button
                onClick={handleViewSeatAvailability} // On button click, navigate to seat matrix page
                className="mt-6 w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span className="material-symbols-outlined">chair</span>
                <span>View Seat Availability</span>
              </button>
            </div>
            {/* Active Bookings and other content */}
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined">event_seat</span>
                Active Bookings
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl hover:translate-x-2 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <span className="material-symbols-outlined">chair</span>
                    <div>
                      <p className="font-semibold">Seat A-123</p>
                      <p className="text-sm opacity-75">Floor 3, Wing B</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl hover:translate-x-2 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <span className="material-symbols-outlined">chair</span>
                    <div>
                      <p className="font-semibold">Seat B-456</p>
                      <p className="text-sm opacity-75">Floor 4, Wing A</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined">history</span>
                Booking History
              </h3>
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 hover:translate-x-2 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <span className="material-symbols-outlined">event_seat</span>
                      <div>
                        <p className="font-semibold">Seat A-${i + 100}</p>
                        <p className="text-sm opacity-75">Booked on May ${i + 1}, 2023</p>
                      </div>
                    </div>
                    <span className="px-4 py-1.5 rounded-full bg-green-100 text-sm font-medium">Completed</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
