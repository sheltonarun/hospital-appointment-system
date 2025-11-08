import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    username: "",
    password: "",
    confirm: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirm)
      return alert("Passwords do not match!");
    try {
      // 🔗 Use your Render backend URL here
      await axios.post("https://hospital-backend-veyr.onrender.com/register", form);
      alert("Registered successfully!");
    } catch (err) {
      alert("Error: " + (err.response?.data?.error || "Registration failed"));
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input
        placeholder="Full Name"
        onChange={(e) => setForm({ ...form, full_name: e.target.value })}
      />
      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        placeholder="Username"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        onChange={(e) => setForm({ ...form, confirm: e.target.value })}
      />
      <button type="submit">Register</button>
    </form>
  );
}
