// src/pages/Dashboard.tsx

import React from "react";

export const Dashboard = () => {
  return (
    <div className="min-h-screen min-w-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-md rounded-xl p-6">
          <p className="text-sm text-gray-500">Total Users</p>
          <h2 className="text-2xl font-bold text-blue-600">1,204</h2>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <p className="text-sm text-gray-500">Active Subscriptions</p>
          <h2 className="text-2xl font-bold text-green-600">782</h2>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <p className="text-sm text-gray-500">Monthly Revenue</p>
          <h2 className="text-2xl font-bold text-amber-600">$45,210</h2>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <p className="text-sm text-gray-500">Support Tickets</p>
          <h2 className="text-2xl font-bold text-red-600">37</h2>
        </div>
      </div>
    </div>
  );
};
