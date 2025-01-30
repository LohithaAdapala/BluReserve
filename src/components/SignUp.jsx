import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/managerView.css";

const SignUp = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    navigate("/dashboard");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div id="webcrumbs">
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white grid grid-cols-12 gap-8 py-12 px-8">
        <div className="col-start-4 col-span-6 space-y-8 bg-white p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
          <div>
            <div className="flex items-center justify-center space-x-3 mb-10">
              <span className="material-symbols-outlined text-blue-600 text-5xl">chair</span>
              <h1 className="text-4xl font-bold text-blue-600">BluReserve</h1>
            </div>
            <h2 className="text-center text-4xl font-bold">Create your account</h2>
            <p className="mt-3 text-center text-gray-600 text-lg">Join our community today</p>
          </div>
          <form onSubmit={handleSubmit} className="mt-10 space-y-8">
            <div className="space-y-6">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">person</span>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="appearance-none rounded-2xl w-3/4 relative block w-full pl-12 pr-4 py-4 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-base transition-all duration-300"
                  placeholder="Full Name"
                />
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">mail</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="appearance-none rounded-2xl relative block w-full pl-12 pr-4 py-4 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-base transition-all duration-300"
                  placeholder="Email address"
                />
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">lock</span>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="appearance-none rounded-2xl relative block w-full pl-12 pr-4 py-4 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-base transition-all duration-300"
                  placeholder="Password"
                />
              </div>
            </div>

            <button type="submit" className="group relative w-full flex justify-center py-4 px-6 border border-transparent text-base font-medium rounded-2xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all hover:scale-[1.02] active:scale-[0.98]">
              <span className="absolute left-0 inset-y-0 flex items-center pl-4">
                <span className="material-symbols-outlined">how_to_reg</span>
              </span>
              Sign up
            </button>
          </form>

          <div className="text-center text-base">
            <p className="text-gray-500">
              Already have an account?
              <a href="#" className="ml-2 font-medium text-blue-600 hover:text-blue-500 transition-colors">Sign in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
