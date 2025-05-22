import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-6">Welcome to ReplyFlow AI</h1>
      <p className="mb-6 text-center max-w-md">
        Economize tempo respondendo mensagens e e-mails com respostas inteligentes feitas por IA no seu estilo.
      </p>
      <Link
        to="/login"
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Entrar / Registrar
      </Link>
    </div>
  );
}
