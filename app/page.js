'use client';
import React, { useState } from "react";

export default function HomePage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <div style={{padding:20}}>
      <h1>ZeroWork AI</h1>
      <p>We Build AI That Runs Your Business</p>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>
        <button type="submit">Send</button>
      </form>
      <p>© 2026 Srikanth Yeluri | Phone: +91 9876543210</p>
    </div>
  );
}
