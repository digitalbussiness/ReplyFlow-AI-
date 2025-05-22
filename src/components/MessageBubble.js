import React from "react";

export default function MessageBubble({ message, isUser }) {
  return (
    <div
      className={`p-3 my-2 max-w-xs rounded-lg text-white ${
        isUser ? "bg-blue-600 self-end" : "bg-gray-500 self-start"
      }`}
    >
      {message}
    </div>
  );
}
