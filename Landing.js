import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4 text-center">
        Bem-vindo ao ReplyFlow AI
      </h1>
      <p className="text-gray-700 text-lg md:text-xl mb-6 text-center max-w-2xl">
        Automatize suas respostas com inteligência artificial. Economize tempo, ganhe produtividade e eleve o atendimento ao próximo nível.
      </p>
      <div className="flex space-x-4">
        <Link
          to="/signup"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow"
        >
          Criar Conta
        </Link>
        <Link
          to="/login"
          className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-2 px-6 rounded shadow"
        >
          Entrar
        </Link>
      </div>
    </div>
  );
}
