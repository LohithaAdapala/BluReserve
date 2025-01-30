import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "../styles/managerView.css";

const ManagerView = () => {
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
    	              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
    	            </summary>
    	          </details>
    	          <details className="relative">
    	            <summary className="flex items-center space-x-2 cursor-pointer hover:text-blue-600 transition-colors">
    	              <span className="material-symbols-outlined">account_circle</span>
    	              <span>Manager View</span>
    	            </summary>
    	          </details>
    	        </div>
    	      </div>
    	    </div>
    	  </nav>
    	
    	  <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    	    <div className="bg-white rounded-xl shadow-md p-6 transform hover:scale-105 transition-transform">
    	      <div className="flex items-center justify-between mb-4">
    	        <h2 className="text-xl font-semibold">Blu Dollar Balance</h2>
    	        <span className="material-symbols-outlined text-blue-600">account_balance_wallet</span>
    	      </div>
    	      <div className="space-y-4">
    	        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
    	          <div className="flex items-center space-x-2">
    	            <span className="material-symbols-outlined">payments</span>
    	            <span>Total Employee Balance</span>
    	          </div>
    	          <span className="font-bold">15,230 BD</span>
    	        </div>
    	        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
    	          <div className="flex items-center space-x-2">
    	            <span className="material-symbols-outlined">trending_up</span>
    	            <span>Monthly Allocation</span>
    	          </div>
    	          <span className="font-bold">20,000 BD</span>
    	        </div>
    	      </div>
    	    </div>
    	
    	    <div className="bg-white rounded-xl shadow-md p-6 transform hover:scale-105 transition-transform">
    	      <div className="flex items-center justify-between mb-4">
    	        <h2 className="text-xl font-semibold">Employee Activity</h2>
    	        <span className="material-symbols-outlined text-blue-600">group</span>
    	      </div>
    	      <div className="space-y-4">
    	        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
    	          <div className="flex items-center space-x-2">
    	            <span className="material-symbols-outlined">event_busy</span>
    	            <span>Pending Bookings</span>
    	          </div>
    	          <span className="font-bold text-orange-500">8</span>
    	        </div>
    	        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
    	          <div className="flex items-center space-x-2">
    	            <span className="material-symbols-outlined">check_circle</span>
    	            <span>Approved Today</span>
    	          </div>
    	          <span className="font-bold text-green-500">12</span>
    	        </div>
    	      </div>
    	    </div>
    	
    	    <div className="bg-white rounded-xl shadow-md p-6 transform hover:scale-105 transition-transform">
    	      <div className="flex items-center justify-between mb-4">
    	        <h2 className="text-xl font-semibold">Recent Bookings</h2>
    	        <span className="material-symbols-outlined text-blue-600">history</span>
    	      </div>
    	      <div className="space-y-4">
    	        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
    	          <div className="flex items-center space-x-2">
    	            <span className="material-symbols-outlined">chair</span>
    	            <div className="flex flex-col">
    	              <span>Seat #A42</span>
    	              <span className="text-sm text-gray-500">John D.</span>
    	            </div>
    	          </div>
    	          <span className="text-sm">5m ago</span>
    	        </div>
    	        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
    	          <div className="flex items-center space-x-2">
    	            <span className="material-symbols-outlined">chair</span>
    	            <div className="flex flex-col">
    	              <span>Seat #B15</span>
    	              <span className="text-sm text-gray-500">Sarah M.</span>
    	            </div>
    	          </div>
    	          <span className="text-sm">15m ago</span>
    	        </div>
    	      </div>
    	    </div>
    	  </div>
    	</div> 
            </div>
  )
}

export default ManagerView;