import React, { useState } from "react";
import axios from "axios";

export default function Login({ onLoginSuccess }) {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", form);
      alert("Login successful!");
      onLoginSuccess(form.username);
    } catch (err) {
      alert("Error: " + (err.response?.data?.error || "Login failed"));
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        placeholder="Username or Email"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button type="submit">Login</button>
    </form>
  );
}
