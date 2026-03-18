import { useState } from "react";

export default function Home() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([
    { role: "bot", text: "👋 Welcome to ZeroWork AI. Tell me your business need." }
  ]);

  const send = () => {
    if (!msg) return;

    setChat([...chat, { role: "user", text: msg }]);

    setTimeout(() => {
      setChat(prev => [
        ...prev,
        {
          role: "bot",
          text: "🚀 We build AI systems that bring clients automatically. Click WhatsApp below to start."
        }
      ]);
    }, 500);

    setMsg("");
  };

  return (
    <div style={{
      background: "linear-gradient(135deg,#000,#0a0a0a)",
      color: "white",
      minHeight: "100vh",
      textAlign: "center",
      padding: "40px",
      fontFamily: "Arial"
    }}>

      <h1 style={{ fontSize: "42px" }}>ZeroWork AI</h1>
      <p style={{ opacity: 0.7 }}>
        AI Systems That Get You Clients Automatically
      </p>

      <a
        href="https://wa.me/918919812822"
        target="_blank"
        style={{
          background: "#25D366",
          padding: "12px 25px",
          display: "inline-block",
          marginTop: "20px",
          borderRadius: "8px",
          color: "white",
          textDecoration: "none"
        }}
      >
        Chat on WhatsApp
      </a>

      <div style={{
        marginTop: "40px",
        maxWidth: "400px",
        marginInline: "auto",
        background: "#111",
        padding: "20px",
        borderRadius: "10px"
      }}>
        <div style={{ minHeight: "150px", textAlign: "left" }}>
          {chat.map((c, i) => (
            <p key={i} style={{ opacity: 0.8 }}>
              <b>{c.role === "bot" ? "AI" : "You"}:</b> {c.text}
            </p>
          ))}
        </div>

        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Type your message..."
          style={{ width: "70%", padding: "8px" }}
        />
        <button onClick={send} style={{ padding: "8px 15px" }}>
          Send
        </button>
      </div>

      <p style={{ marginTop: "40px", opacity: 0.6 }}>
        futurewrites@gmail.com<br />
        Phone: +91 8919812822<br />
        © 2026 Srikanth Yeluri
      </p>
    </div>
  );
}
