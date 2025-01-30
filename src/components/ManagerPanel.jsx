import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "../styles/managerPanel.css";

const ManagerPanel = () => {
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
    	              <span>Manager Panel</span>
    	            </summary>
    	          </details>
    	        </div>
    	      </div>
    	    </div>
    	  </nav>
    	
    	  <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    	    <div className="bg-white rounded-xl shadow-md p-6 transform hover:scale-105 transition-transform">
    	      <div className="flex items-center justify-between mb-4">
    	        <h2 className="text-xl font-semibold">Blu Dollar Management</h2>
    	        <span className="material-symbols-outlined text-blue-600">payments</span>
    	      </div>
    	      <div className="flex flex-col space-y-4">
    	        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
    	          Transfer Blu Dollars
    	        </button>
    	        <button className="border-2 border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
    	          Add Blu Dollars
    	        </button>
    	      </div>
    	    </div>
    	
    	    <div className="bg-white rounded-xl shadow-md p-6 transform hover:scale-105 transition-transform">
    	      <div className="flex items-center justify-between mb-4">
    	        <h2 className="text-xl font-semibold">Employee Booking Tracking</h2>
    	        <span className="material-symbols-outlined text-blue-600">group</span>
    	      </div>
    	      <div className="space-y-4">
    	        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
    	          <div className="flex items-center space-x-2">
    	            <span className="material-symbols-outlined">person</span>
    	            <span>John Smith</span>
    	          </div>
    	          <span className="font-bold">35 BD</span>
    	        </div>
    	        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
    	          <div className="flex items-center space-x-2">
    	            <span className="material-symbols-outlined">person</span>
    	            <span>Sarah Johnson</span>
    	          </div>
    	          <span className="font-bold">42 BD</span>
    	        </div>
    	        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
    	          <div className="flex items-center space-x-2">
    	            <span className="material-symbols-outlined">person</span>
    	            <span>Mike Davis</span>
    	          </div>
    	          <span className="font-bold">28 BD</span>
    	        </div>
    	      </div>
    	    </div>
    	
    	    <div className="bg-white rounded-xl shadow-md p-6 transform hover:scale-105 transition-transform">
    	      <div className="flex items-center justify-between mb-4">
    	        <h2 className="text-xl font-semibold">Transaction History</h2>
    	        <span className="material-symbols-outlined text-blue-600">history</span>
    	      </div>
    	      <div className="space-y-3">
    	        <div className="p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
    	          <div className="flex justify-between items-center">
    	            <span>Deposit</span>
    	            <span className="font-bold text-green-600">+500 BD</span>
    	          </div>
    	          <span className="text-sm text-gray-500">2023-06-15 14:30</span>
    	        </div>
    	        <div className="p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
    	          <div className="flex justify-between items-center">
    	            <span>Withdrawal</span>
    	            <span className="font-bold text-red-600">-200 BD</span>
    	          </div>
    	          <span className="text-sm text-gray-500">2023-06-14 09:15</span>
    	        </div>
    	      </div>
    	    </div>
    	  </div>
    	</div> 
            </div>
  )
}

export default ManagerPanel;