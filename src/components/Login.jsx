import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

import "../styles/login.css";

const Login = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
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
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-[800px] space-y-8 bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="flex justify-between items-start">
            <div className="w-1/2 pr-12 border-r">
              <div className="flex items-center space-x-2 mb-8">
                <span className="material-symbols-outlined text-blue-600 text-4xl hover:scale-110 transition-transform duration-300">chair</span>
                <h1 className="text-3xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-300">BluReserve</h1>
              </div>
              <h2 className="text-3xl font-bold hover:scale-105 transition-transform duration-300">Welcome Back</h2>
              <p className="mt-2 text-gray-600 text-lg">Sign in to continue</p>
            </div>

            <div className="w-1/2 pl-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-blue-500 transition-colors duration-300">mail</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="appearance-none rounded-xl relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm transition-all duration-300 hover:border-blue-400"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-blue-500 transition-colors duration-300">lock</span>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="appearance-none rounded-xl relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm transition-all duration-300 hover:border-blue-400"
                      placeholder="Password"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600 cursor-pointer">Remember me</label>
                    </div>
                    <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors duration-300 hover:underline">Forgot password?</a>
                  </div>
                </div>

                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <span className="material-symbols-outlined group-hover:scale-110 transition-transform duration-300">login</span>
                  </span>
                  Sign in
                </button>
              </form>

              <div className="text-center text-sm mt-6">
                <p className="text-gray-500">
                  Don't have an account?
                  <a href="#" className="ml-1 font-medium text-blue-600 hover:text-blue-500 transition-colors duration-300 hover:underline">Sign up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
