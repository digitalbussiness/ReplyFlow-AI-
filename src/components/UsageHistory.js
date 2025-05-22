import React from "react";

export default function UsageHistory({ history }) {
  return (
    <div className="bg-white shadow rounded p-4 max-h-64 overflow-y-auto">
      <h3 className="font-semibold mb-2">Histórico de Respostas</h3>
      {history.length === 0 && <p className="text-gray-500">Nenhuma resposta gerada ainda.</p>}
      <ul className="list-disc list-inside space-y-1">
        {history.map((item, index) => (
          <li key={index} className="text-sm text-gray-700 break-words">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
