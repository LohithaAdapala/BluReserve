import React from "react";
import "../styles/seatMatrix.css";

const SeatMatrix = () => {
 
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  
  const timeSlots = [
    "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00",
    "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00",
    "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "00:00"
  ];

  
  let startSlot = currentHour;
  if (currentMinute > 0) {
    startSlot += 1; 
  }

  
  const availableSlots = timeSlots.filter((slot) => {
    const slotHour = parseInt(slot.split(":")[0], 10);
    
    if (slotHour === 0 && currentHour !== 23) {
      return true; 
    }
    return slotHour >= startSlot; 
  });

  return (
    <div id="webcrumbs">
      <div className="w-full max-w-7xl mx-auto p-6 bg-white rounded-xl shadow-lg">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 space-y-8">
            <h2 className="text-2xl font-bold">Cafeteria Seating Map</h2>

            <div className="space-y-6">
              <div className="grid grid-cols-5 gap-6">
                {Array(25)
                  .fill()
                  .map((_, i) => (
                    <div key={i} className="bg-gray-50 p-3 rounded-xl">
                      <div className="grid grid-cols-2 gap-2">
                        <button className="aspect-square rounded-lg border-2 border-emerald-200 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 group bg-emerald-50">
                          <span className="material-symbols-outlined group-hover:text-blue-500">chair</span>
                        </button>
                        <button className="aspect-square rounded-lg border-2 border-emerald-200 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 group bg-emerald-50">
                          <span className="material-symbols-outlined group-hover:text-blue-500">chair</span>
                        </button>
                      </div>
                      <div className="mt-2 grid grid-cols-2 gap-2">
                        <button className="aspect-square rounded-lg border-2 border-emerald-200 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 group bg-emerald-50">
                          <span className="material-symbols-outlined group-hover:text-blue-500">chair</span>
                        </button>
                        <button className="aspect-square rounded-lg border-2 border-emerald-200 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 group bg-emerald-50">
                          <span className="material-symbols-outlined group-hover:text-blue-500">chair</span>
                        </button>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="flex justify-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 border-2 border-emerald-200" />
                  <span>Vacant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-blue-500" />
                  <span>Selected</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-red-400" />
                  <span>Booked</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl space-y-6">
            <h3 className="text-xl font-semibold">Booking Details</h3>

            <div className="space-y-4">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300">
                  <span>Select Time Slot</span>
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="mt-2 p-2 bg-white rounded-lg">
                  {availableSlots.map((time) => (
                    <button key={time} className="block w-full text-left px-4 py-2 hover:bg-blue-50 rounded-lg transition-colors duration-300">
                      {time}
                    </button>
                  ))}
                </div>
              </details>

              <div className="bg-white p-4 rounded-lg shadow-sm space-y-2">
                <h4 className="font-medium">Selected Seats</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-sm">A1</span>
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-sm">A2</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Total Amount</h4>
                    <p className="text-sm text-gray-600">Available: 1000 BD</p>
                  </div>
                  <span className="text-2xl font-bold">250 BD</span>
                </div>
              </div>

              <button className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2">
                <span className="material-symbols-outlined">check_circle</span>
                <span>Confirm Booking</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatMatrix;
