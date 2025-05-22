import React from "react";

export default function ResponseHistory({ history, onSelect }) {
  return (
    <div className="mt-4 p-4 border rounded bg-white max-h-60 overflow-y-auto">
      <h3 className="font-bold mb-2">Histórico de Respostas</h3>
      {history.length === 0 ? (
        <p className="text-gray-500">Nenhuma resposta recente.</p>
      ) : (
        <ul>
          {history.map((item, index) => (
            <li
              key={index}
              onClick={() => onSelect(item)}
              className="cursor-pointer mb-2 p-2 hover:bg-gray-100 rounded"
            >
              {item.slice(0, 50)}...
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
