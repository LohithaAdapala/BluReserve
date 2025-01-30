

import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "../styles/bookingManagement.css";

const BookingManagement = () => {
  return (
    <div id="webcrumbs"> 
            	<div className="bg-gray-50 p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
    	  <div className="mb-8">
    	    <h2 className="text-2xl font-semibold mb-6">Active Seat Bookings</h2>
    	    <div className="grid gap-4">
    	      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    	        <div className="flex justify-between items-center">
    	          <div>
    	            <h3 className="text-xl font-medium">Table #A12</h3>
    	            <p className="text-gray-600 mt-2">Booking ID: #12345</p>
    	            <div className="mt-3 flex items-center gap-4">
    	              <div className="flex items-center gap-2">
    	                <span className="material-symbols-outlined">schedule</span>
    	                <span>Start: 12:30 PM</span>
    	              </div>
    	              <div className="flex items-center gap-2">
    	                <span className="material-symbols-outlined">schedule</span>
    	                <span>End: 1:00 PM</span>
    	              </div>
    	            </div>
    	          </div>
    	          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full">In Use</span>
    	        </div>
    	      </div>
    	    </div>
    	  </div>
    	
    	  <div className="border-t pt-8">
    	    <h2 className="text-2xl font-semibold mb-6">Modify/Cancel Seat Booking</h2>
    	    <div className="bg-white p-6 rounded-lg shadow-md">
    	      <details className="group">
    	        <summary className="flex items-center justify-between cursor-pointer list-none">
    	          <span className="font-medium">Modify Time Slot</span>
    	          <span className="material-symbols-outlined transform group-open:rotate-180 transition-transform">expand_more</span>
    	        </summary>
    	        <div className="mt-4 space-y-4">
    	          <div className="grid grid-cols-2 gap-4">
    	            <select className="w-full p-3 border rounded-lg bg-white shadow-sm hover:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200 cursor-pointer appearance-none">
    	  <option>11:00 AM - 11:30 AM</option>
    	  <option>11:30 AM - 12:00 PM</option>
    	  <option>12:00 PM - 12:30 PM</option>
    	  <option>12:30 PM - 1:00 PM</option>
    	  <option>1:00 PM - 1:30 PM</option>
    	  <option>1:30 PM - 2:00 PM</option>
    	  <option>2:00 PM - 2:30 PM</option>
    	  <option>2:30 PM - 3:00 PM</option>
    	</select>
    	            <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-6">
    	  <h2 className="text-2xl font-bold mb-4">Active Seat Bookings</h2>
    	  
    	  <div className="bg-gray-50 p-4 rounded-xl">
    	    <div className="flex justify-between items-center">
    	      <h3 className="text-lg font-semibold">Table #A12</h3>
    	      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">In Use</span>
    	    </div>
    	    <p className="text-gray-600 mt-1">Booking ID: #12345</p>
    	    <div className="flex gap-6 mt-3">
    	      <div className="flex items-center gap-2">
    	        <span className="material-symbols-outlined">schedule</span>
    	        <span>Start: 12:30 PM</span>
    	      </div>
    	      <div className="flex items-center gap-2">
    	        <span className="material-symbols-outlined">event_upcoming</span>
    	        <span>End: 1:00 PM</span>
    	      </div>
    	    </div>
    	  </div>
    	
    	  <div className="space-y-4">
    	    <h3 className="text-xl font-semibold">Modify/Cancel Seat Booking</h3>
    	    <details className="w-full">
    	      <summary className="flex items-center justify-between w-full p-3 border rounded-lg cursor-pointer hover:border-blue-500 transition-all">
    	        <span className="flex items-center gap-2">
    	          <span className="material-symbols-outlined">edit_calendar</span>
    	          Modify Time Slot
    	        </span>
    	        <span className="material-symbols-outlined">expand_more</span>
    	      </summary>
    	      <select className="mt-2 w-full p-3 border rounded-lg hover:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all">
    	        <option>12:30 PM</option>
    	        <option>1:00 PM</option>
    	        <option>1:30 PM</option>
    	        <option>2:00 PM</option>
    	        <option>2:30 PM</option>
    	      </select>
    	    </details>
    	    
    	    <button className="w-full p-3 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
    	      <span className="material-symbols-outlined">cancel</span>
    	      Cancel Seat Booking
    	    </button>
    	  </div>
    	</div>
    	          </div>
    	          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transform hover:scale-[1.02] transition-all">
    	            Update Time Slot
    	          </button>
    	        </div>
    	      </details>
    	
    	      <div className="mt-6 pt-6 border-t">
    	        <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transform hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
    	          <span className="material-symbols-outlined">cancel</span>
    	          Cancel Seat Booking
    	        </button>
    	      </div>
    	    </div>
    	  </div>
    	</div> 
            </div>
  )
}

export default BookingManagement;

