import React from "react";

export default function MessageInput({ message, setMessage }) {
  return (
    <textarea
      className="w-full p-3 border border-gray-300 rounded resize-none focus:outline-blue-500"
      rows={5}
      placeholder="Cole a mensagem recebida aqui..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    />
  );
}
