// src/pages/Landing.js
import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-slate-100 text-gray-800">
      <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
        <h1 className="text-2xl font-bold text-blue-600">ReplyFlow AI</h1>
        <div className="space-x-4">
          <Link to="/login" className="text-blue-600 hover:underline font-medium">
            Login
          </Link>
          <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Criar Conta
          </Link>
        </div>
      </header>

      <main className="flex-grow">
        <section className="text-center py-20 px-6">
          <h2 className="text-4xl font-extrabold mb-4">Automatize Suas Respostas com Inteligência Artificial</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            O ReplyFlow AI ajuda freelancers, coaches e pequenos empresários a responder mensagens e e-mails com eficiência usando IA.
          </p>
          <Link
            to="/signup"
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
          >
            Comece Gratuitamente
          </Link>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold mb-6">Como funciona?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-6 rounded shadow">
                <h4 className="font-semibold text-xl mb-2">1. Conecte sua conta</h4>
                <p>Faça login e conecte sua caixa de entrada para começar.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded shadow">
                <h4 className="font-semibold text-xl mb-2">2. Personalize as respostas</h4>
                <p>Configure o tom, estilo e exemplos de resposta da IA.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded shadow">
                <h4 className="font-semibold text-xl mb-2">3. Deixe a IA responder</h4>
                <p>Economize tempo enquanto a IA responde por você com precisão.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-50">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold mb-6">Por que usar o ReplyFlow AI?</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <li>✅ Aumente sua produtividade</li>
              <li>✅ Respostas consistentes e profissionais</li>
              <li>✅ Economize horas por semana</li>
              <li>✅ Comece de graça, atualize quando quiser</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="text-center py-4 text-sm text-gray-500 bg-white">
        &copy; {new Date().getFullYear()} ReplyFlow AI · Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default Landing;
