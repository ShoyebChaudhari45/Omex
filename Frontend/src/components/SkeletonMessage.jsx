import React, { useState } from "react";

const SkeletonMessage = () => {
  return (
    <div className="flex flex-col space-y-2 animate-pulse">
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
    </div>
  );
};

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
                : "bg-gray-200 dark:bg-gray-700 text-left"
            }`}
          >
            {msg.text}
          </p>
        ))}

        {/* 🔲 Skeleton while AI is thinking */}
        {loading && (
          <div className="p-2 my-1 rounded bg-gray-100 dark:bg-gray-800">
            <SkeletonMessage />
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
