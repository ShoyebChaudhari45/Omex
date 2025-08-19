import React, { useState } from "react";

export default function AIChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
    setLoading(true);

    try {
      // Replace with your actual API call
      const res = await fetch("/api/ask", {
        method: "POST",
        body: JSON.stringify({ query: input }),
      });
      const data = await res.json();

      setMessages((prev) => [...prev, { text: data.answer, sender: "ai" }]);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg">
      <div className="h-64 overflow-y-auto border p-2 mb-4 rounded">
        {messages.map((msg, i) => (
          <p
            key={i}
            className={`p-2 my-1 rounded ${
              msg.sender === "user"
                ? "bg-indigo-100 text-right"
                : "bg-gray-200 text-left"
            }`}
          >
            {msg.text}
          </p>
        ))}

        {/* ⏳ Loader */}
        {loading && (
          <div className="flex justify-center items-center py-3">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-600"></div>
            <span className="ml-2 text-sm text-gray-500">Thinking...</span>
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <input
          className="flex-1 p-2 border rounded dark:bg-gray-800"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          disabled={loading}
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="px-4 py-2 bg-indigo-600 text-white rounded disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}
