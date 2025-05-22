import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Automatize Suas Respostas com IA
        </h1>
        <p className="text-lg md:text-xl mb-8">
          O <strong>ReplyFlow AI</strong> ajuda freelancers, coaches e empreendedores a economizar tempo com respostas inteligentes e automáticas.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            to="/signup"
            className="bg-white text-purple-700 px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-gray-200 transition"
          >
            Comece Agora
          </Link>
          <Link
            to="/login"
            className="bg-transparent border-2 border-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-white hover:text-purple-700 transition"
          >
            Já tenho conta
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
