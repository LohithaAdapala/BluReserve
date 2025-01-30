import React from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook

import "../styles/homePage.css";

const HomePage = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div id="webcrumbs">
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-blue-600 text-3xl">chair</span>
                <h1 className="text-2xl font-bold text-blue-600">BluReserve</h1>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a className="hover:text-blue-600 transition-colors font-medium" href="#availability">Available Seats</a>
                <a className="hover:text-blue-600 transition-colors font-medium" href="#locations">Locations</a>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => navigate("/login")} // Navigate to login page
                  className="px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/signup")} // Navigate to signup page
                  className="px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                >
                  Sign Up
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">Book Now</button>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 py-16">
          <section className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">Reserve Your Perfect Spot</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Book your seat at our cafeteria with ease. Currently available: 73 out of 100 seats.</p>
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 font-medium">Book a Seat</button>
          </section>

          <section className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <span className="material-symbols-outlined text-4xl text-blue-600 mb-4">event_seat</span>
              <h3 className="text-xl font-bold mb-2">Quick Booking</h3>
              <p>Reserve your preferred seat in seconds for a comfortable dining experience.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <span className="material-symbols-outlined text-4xl text-blue-600 mb-4">schedule</span>
              <h3 className="text-xl font-bold mb-2">Real-time Availability</h3>
              <p>Check current seat availability and book instantly to secure your spot.</p>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready for a Better Lunch Experience?</h2>
            <p className="text-xl mb-8">Book your seat now and enjoy a comfortable dining experience</p>
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 font-medium">Reserve Now</button>
          </section>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
