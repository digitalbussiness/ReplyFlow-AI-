import React, { useState } from "react";

export default function ChatInput({ onSend }) {
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSend} className="flex p-2 border-t">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow p-2 border rounded-l"
        placeholder="Digite sua mensagem..."
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 rounded-r hover:bg-blue-700 transition"
      >
        Enviar
      </button>
    </form>
  );
}
