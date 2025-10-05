import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handlelogin = () =>{
    if (username === "admin" && password === "1234") {
      alert("✅ Successfully logged in");
      navigate("/"); // Go to Dashboard
    } else {
      alert("❌ Invalid username or password");
    }
    };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 border rounded-lg shadow-md w-80">
        <h1 className="text-xl font-bold mb-4">Login</h1>

        <input
          type="text"
          placeholder="Username"
          className="border w-full p-2 mb-3 rounded"
          value={username}
          onChange={(e) =>setUsername(e.target.value) }
        />
        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 mb-3 rounded"
          value={password}
          onChange={(e) =>setPassword(e.target.value)}
        />

        <button className="bg-green-500 text-white w-full py-2 rounded" onClick={handlelogin}>
          Login
        </button>
        <button onClick={() => navigate("/Signup")}>
            Signup
        </button>
      </div>
    </div>
  );
}
