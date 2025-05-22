import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">ReplyFlow AI</h1>
      <p className="text-lg text-gray-600 max-w-xl mb-8">
        Respostas automáticas com inteligência artificial para economizar seu tempo. Ideal para freelancers, coaches e pequenos negócios.
      </p>
      <div className="flex gap-4">
        <Link
          to="/signup"
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition text-lg"
        >
          Começar agora
        </Link>
        <Link
          to="/login"
          className="border border-gray-400 hover:bg-gray-100 py-3 px-6 rounded-lg transition text-lg"
        >
          Já tenho conta
        </Link>
      </div>
    </div>
  );
}
