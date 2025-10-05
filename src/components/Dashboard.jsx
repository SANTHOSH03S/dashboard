import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <h2>SANTHOSH</h2>
      {/* Login button / icon */}
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => navigate("/login")}
      >
        🔑 Login
      </button>
    </div>
  );
}
