import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "../styles/adminView.css";

const AdminView = () => {
  return (
    <div id="webcrumbs"> 
            	<div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
    	  <nav className="bg-white shadow-lg">
    	    <div className="max-w-7xl mx-auto px-4 py-3">
    	      <div className="flex justify-between items-center">
    	        <div className="flex items-center space-x-2">
    	          <span className="material-symbols-outlined text-blue-600 text-3xl hover:scale-110 transition-transform">water_drop</span>
    	          <h1 className="text-2xl font-bold text-blue-600">BluReserve</h1>
    	        </div>
    	        <div className="flex items-center space-x-6">
    	          <details className="relative">
    	            <summary className="flex items-center space-x-2 cursor-pointer hover:text-blue-600 transition-colors">
    	              <span className="material-symbols-outlined hover:scale-110 transition-transform">notifications</span>
    	              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
    	            </summary>
    	          </details>
    	          <details className="relative">
    	            <summary className="flex items-center space-x-2 cursor-pointer hover:text-blue-600 transition-colors">
    	              <span className="material-symbols-outlined hover:scale-110 transition-transform">admin_panel_settings</span>
    	              <span>Admin View</span>
    	            </summary>
    	          </details>
    	        </div>
    	      </div>
    	    </div>
    	  </nav>
    	
    	  <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    	    <div className="bg-white rounded-xl shadow-md p-6 transform hover:scale-105 transition-transform">
    	      <div className="flex items-center justify-between mb-4">
    	        <h2 className="text-xl font-semibold">System Overview</h2>
    	        <span className="material-symbols-outlined text-blue-600 hover:scale-110 transition-transform">dashboard</span>
    	      </div>
    	      <div className="space-y-4">
    	        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
    	          <div className="flex items-center space-x-2">
    	            <span className="material-symbols-outlined hover:scale-110 transition-transform">chair</span>
    	            <span>Total Seats</span>
    	          </div>
    	          <span className="font-bold">100</span>
    	        </div>
    	        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
    	          <div className="flex items-center space-x-2">
    	            <span className="material-symbols-outlined hover:scale-110 transition-transform">event_seat</span>
    	            <span>Available Seats</span>
    	          </div>
    	          <span className="font-bold text-green-500">42</span>
    	        </div>
    	      </div>
    	    </div>
    	
    	    <div className="bg-white rounded-xl shadow-md p-6 transform hover:scale-105 transition-transform">
    	      <div className="flex items-center justify-between mb-4">
    	        <h2 className="text-xl font-semibold">Booking Status</h2>
    	        <span className="material-symbols-outlined text-blue-600 hover:scale-110 transition-transform">analytics</span>
    	      </div>
    	      <div className="space-y-4">
    	        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
    	          <div className="flex items-center space-x-2">
    	            <span className="material-symbols-outlined hover:scale-110 transition-transform">pending_actions</span>
    	            <span>Pending Requests</span>
    	          </div>
    	          <span className="font-bold text-orange-500">8</span>
    	        </div>
    	        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
    	          <div className="flex items-center space-x-2">
    	            <span className="material-symbols-outlined hover:scale-110 transition-transform">verified</span>
    	            <span>Active Bookings</span>
    	          </div>
    	          <span className="font-bold text-blue-600">58</span>
    	        </div>
    	      </div>
    	    </div>
    	
    	    <div className="bg-white rounded-xl shadow-md p-6 transform hover:scale-105 transition-transform">
    	      <div className="flex items-center justify-between mb-4">
    	        <h2 className="text-xl font-semibold">System Health</h2>
    	        <span className="material-symbols-outlined text-blue-600 hover:scale-110 transition-transform">monitoring</span>
    	      </div>
    	      <div className="space-y-4">
    	        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
    	          <div className="flex items-center space-x-2">
    	            <span className="material-symbols-outlined hover:scale-110 transition-transform">speed</span>
    	            <span>System Status</span>
    	          </div>
    	          <span className="text-green-500 font-semibold">Optimal</span>
    	        </div>
    	        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
    	          <div className="flex items-center space-x-2">
    	            <span className="material-symbols-outlined hover:scale-110 transition-transform">update</span>
    	            <span>Last Update</span>
    	          </div>
    	          <span className="text-sm">2m ago</span>
    	        </div>
    	      </div>
    	    </div>
    	  </div>
    	</div> 
            </div>
  )
}

export default AdminView;