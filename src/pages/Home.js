import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 flex flex-col justify-center items-center text-center px-4">
      <div className="max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 mb-6">
          ReplyFlow AI
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Automatize suas respostas com inteligência artificial. Ganhe tempo, aumente sua produtividade e impressione seus clientes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/signup"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl shadow-lg transition text-lg font-medium"
          >
            Começar agora
          </Link>
          <Link
            to="/login"
            className="border border-blue-600 text-blue-600 hover:bg-blue-100 py-3 px-6 rounded-xl shadow-sm transition text-lg font-medium"
          >
            Já tenho conta
          </Link>
        </div>
      </div>
      <footer className="mt-12 text-sm text-gray-500">
        © {new Date().getFullYear()} ReplyFlow AI — Todos os direitos reservados.
      </footer>
    </div>
  );
}
