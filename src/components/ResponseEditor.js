import React, { useState } from "react";

export default function ResponseEditor({ initialResponse, onChange }) {
  const [response, setResponse] = useState(initialResponse || "");

  function handleChange(e) {
    setResponse(e.target.value);
    onChange(e.target.value);
  }

  return (
    <textarea
      className="w-full p-3 border rounded resize-none h-40"
      value={response}
      onChange={handleChange}
      placeholder="Resposta gerada aparecerá aqui..."
    />
  );
}
