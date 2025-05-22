import React from "react";

export default function ResponseDisplay({ response, onEdit, onCopy }) {
  return (
    <div className="mt-4 p-4 border rounded bg-gray-50">
      <textarea
        className="w-full p-2 border border-gray-300 rounded resize-none"
        rows={6}
        value={response}
        onChange={(e) => onEdit(e.target.value)}
      />
      <button
        onClick={onCopy}
        className="mt-2 bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700"
      >
        Copiar Resposta
      </button>
    </div>
  );
}
