// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", users: 30, revenue: 4000 },
  { name: "Feb", users: 45, revenue: 3000 },
  { name: "Mar", users: 60, revenue: 5000 },
  { name: "Apr", users: 40, revenue: 3500 },
];

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Failed to fetch users:", err));
  }, []);

  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <p className="text-sm text-gray-500">Total Users</p>
          <p className="text-lg font-semibold">{users.length}</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <p className="text-sm text-gray-500">Revenue</p>
          <p className="text-lg font-semibold">$24,000</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <p className="text-sm text-gray-500">Reports</p>
          <p className="text-lg font-semibold">56</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <p className="text-sm text-gray-500">Settings</p>
          <p className="text-lg font-semibold">8 changes</p>
        </div>
      </div>

      <div className="bg-white rounded shadow p-4">
        <h2 className="text-xl font-semibold mb-4">User Growth & Revenue</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#3b82f6" name="Users" />
            <Bar dataKey="revenue" fill="#10b981" name="Revenue" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded shadow p-4">
        <h2 className="text-xl font-semibold mb-4">User Details</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200">Name</th>
                <th className="py-2 px-4 bg-gray-200">Email</th>
                <th className="py-2 px-4 bg-gray-200">Application Status</th>
                <th className="py-2 px-4 bg-gray-200">Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="py-2 px-4">{user.name}</td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4">{user.applicationStatus}</td>
                  <td className="py-2 px-4">{user.paymentStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
