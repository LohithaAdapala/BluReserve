import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "../styles/adminPanel.css";

const AdminPanel = () => {
  return (
    <div id="webcrumbs"> 
            	<div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
    	  <nav className="bg-white shadow-lg">
    	    <div className="max-w-7xl mx-auto px-4 py-3">
    	      <div className="flex justify-between items-center">
    	        <div className="flex items-center space-x-2">
    	          <span className="material-symbols-outlined text-blue-600 text-3xl">water_drop</span>
    	          <h1 className="text-2xl font-bold text-blue-600">BluReserve</h1>
    	        </div>
    	        <div className="flex items-center space-x-6">
    	          <details className="relative">
    	            <summary className="flex items-center space-x-2 cursor-pointer hover:text-blue-600 transition-colors">
    	              <span className="material-symbols-outlined">notifications</span>
    	              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
    	            </summary>
    	          </details>
    	          <details className="relative">
    	            <summary className="flex items-center space-x-2 cursor-pointer hover:text-blue-600 transition-colors">
    	              <span className="material-symbols-outlined">account_circle</span>
    	              <span>Admin Panel</span>
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
    	        <span className="material-symbols-outlined text-blue-600">dashboard</span>
    	      </div>
    	      <div className="space-y-4">
    	        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
    	          <div className="flex items-center space-x-2">
    	            <span className="material-symbols-outlined">chair</span>
    	            <span>Total Seats</span>
    	          </div>
    	          <span className="font-bold">100</span>
    	        </div>
    	        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
    	          <div className="flex items-center space-x-2">
    	            <span className="material-symbols-outlined">event_seat</span>
    	            <span>Available Seats</span>
    	          </div>
    	          <span className="font-bold">43</span>
    	        </div>
    	      </div>
    	    </div>
    	
    	    <div className="bg-white rounded-xl shadow-md p-6 transform hover:scale-105 transition-transform">
    	      <div className="flex items-center justify-between mb-4">
    	        <h2 className="text-xl font-semibold">Seat Management</h2>
    	        <span className="material-symbols-outlined text-blue-600">chair_alt</span>
    	      </div>
    	      <div className="flex flex-col space-y-4">
    	        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
    	          Assign Seats
    	        </button>
    	        <button className="border-2 border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
    	          View Seat Map
    	        </button>
    	      </div>
    	    </div>
    	
    	    <div className="bg-white rounded-xl shadow-md p-6 transform hover:scale-105 transition-transform">
    	      <div className="flex items-center justify-between mb-4">
    	        <h2 className="text-xl font-semibold">Recent Activities</h2>
    	        <span className="material-symbols-outlined text-blue-600">history</span>
    	      </div>
    	      <div className="space-y-4">
    	        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
    	          <div className="flex items-center space-x-2">
    	            <span className="material-symbols-outlined">swap_horiz</span>
    	            <span>Seat Reassignment</span>
    	          </div>
    	          <span className="text-sm">2m ago</span>
    	        </div>
    	        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
    	          <div className="flex items-center space-x-2">
    	            <span className="material-symbols-outlined">add_circle</span>
    	            <span>New Booking</span>
    	          </div>
    	          <span className="text-sm">5m ago</span>
    	        </div>
    	      </div>
    	    </div>
    	  </div>
    	</div> 
            </div>
  )
}

export default AdminPanel;