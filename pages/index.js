<<<<<<< HEAD
export default function Home(){return <h1>ZeroWork AI Ready</h1>}
=======
import React, { useState } from "react";

export default function HomePage() {
  const [messages, setMessages] = useState([
    { text: "Hi 👋 I’m your AI assistant. Tell me your business need.", bot: true }
  ]);
  const [input, setInput] = useState("");

  const phoneNumber = "918919812822";

  const getAIResponse = async (msg) => {
    const text = msg.toLowerCase();

    if (text.includes("price")) return "Pricing depends on your project. Let's discuss on WhatsApp 💰";
    if (text.includes("automation")) return "We automate your business using AI systems 🤖";
    if (text.includes("app")) return "We build Android apps with AI integration 📱";

    return "Great! I understand your requirement. Let’s connect on WhatsApp for details 🚀";
  };

  const saveLead = (msg) => {
    const leads = JSON.parse(localStorage.getItem("leads") || "[]");
    leads.push({ message: msg, date: new Date().toISOString() });
    localStorage.setItem("leads", JSON.stringify(leads));
  };

  const sendMessage = async () => {
    if (!input) return;

    const reply = await getAIResponse(input);

    setMessages([
      ...messages,
      { text: input, bot: false },
      { text: reply, bot: true }
    ]);

    saveLead(input);

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("New Lead: " + input)}`;
    window.open(url, "_blank");

    setInput("");
  };

  return (
    <div style={{background:"black", color:"white", minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
      <h1>AI Client System</h1>

      <div style={{width:300, background:"#111", padding:10}}>
        <div style={{height:200, overflowY:"auto"}}>
          {messages.map((m,i)=>(
            <div key={i} style={{margin:5, padding:5, background:m.bot?"#222":"green"}}>
              {m.text}
            </div>
          ))}
        </div>

        <input value={input} onChange={(e)=>setInput(e.target.value)} />
        <button onClick={sendMessage}>Send</button>
      </div>

      <p>Email: futurewrites@gmail.com</p>
      <p>Phone: +91 8919812822</p>
      <p>© 2026 Srikanth Yeluri</p>
    </div>
  );
}
>>>>>>> eacd037ccb767757688bb699664125bf7d6ce060
