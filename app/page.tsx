"use client";
import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const generateCode = async () => {
    setLoading(true);
    setCode("");
    
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({prompt})
    });
    
    const data = await res.json();
    setCode(data.code);
    setLoading(false);
  };

  return (
    <main className="p-8 max-w-4xl mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-5xl font-bold mb-2 text-center">DevNexus 🚀</h1>
      <p className="text-gray-600 mb-6 text-center">Urdu me bolo, Code hum denge</p>
      
      <textarea 
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Example: mere liye login page bana do"
        className="w-full h-32 p-4 border-2 border-black rounded-lg mb-4 text-lg"
      />
      
      <button 
        onClick={generateCode}
        disabled={loading}
        className="w-full bg-black text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-gray-800"
      >
        {loading? "Code bana raha hun..." : "Code Generate Karo"}
      </button>

      {code && (
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-2">Yeh raha aapka Code:</h2>
          <pre className="p-4 bg-gray-900 text-green-400 rounded-lg overflow-x-auto whitespace-pre-wrap">
            {code}
          </pre>
        </div>
      )}
    </main>
  );
}
