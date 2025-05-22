import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Topo com logo */}
      <header className="p-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">ReplyFlow AI</h1>
        <Link
          to="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Entrar
        </Link>
      </header>

      {/* Seção Hero */}
      <section className="text-center py-20 px-6 bg-blue-50">
        <h2 className="text-4xl font-bold mb-4">
          Automatize suas respostas com inteligência artificial
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          O ReplyFlow AI ajuda freelancers, coaches e empreendedores a economizarem tempo com respostas automáticas otimizadas para mensagens e e-mails.
        </p>
        <Link
          to="/signup"
          className="bg-blue-600 text-white px-6 py-3 rounded text-lg hover:bg-blue-700 transition"
        >
          Comece grátis
        </Link>
      </section>

      {/* Como funciona */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-8">Como funciona</h3>
        <ol className="space-y-4 text-lg">
          <li>✅ Crie uma conta gratuitamente</li>
          <li>🤖 Conecte seu e-mail ou sistema de mensagens</li>
          <li>⚡ Configure respostas automáticas com IA</li>
          <li>📊 Acompanhe os resultados no seu dashboard</li>
        </ol>
      </section>

      {/* Prints ou ilustrações */}
      <section className="py-16 px-6 bg-gray-100 text-center">
        <h3 className="text-3xl font-semibold mb-8">Interface simples e poderosa</h3>
        <img
          src="https://via.placeholder.com/800x400?text=Print+do+Dashboard"
          alt="Print do Dashboard"
          className="mx-auto rounded-lg shadow-lg"
        />
      </section>

      {/* Depoimentos */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-8">O que dizem nossos usuários</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <p>“Economizei 5 horas por semana com o ReplyFlow!”</p>
            <strong className="block mt-2">— João, Coach</strong>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p>“Respondo leads mais rápido e aumento vendas.”</p>
            <strong className="block mt-2">— Carla, Vendedora digital</strong>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="py-16 px-6 bg-blue-50 text-center">
        <h3 className="text-3xl font-semibold mb-8">Planos e preços</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded shadow text-left">
            <h4 className="text-xl font-bold mb-2">Premium</h4>
            <p className="mb-4">R$19,90/mês – Mais respostas e análise básica</p>
            <a
              href="https://pay.cakto.com.br/d7a5uju_390194"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition inline-block"
            >
              Assinar
            </a>
          </div>
          <div className="bg-white p-6 rounded shadow text-left">
            <h4 className="text-xl font-bold mb-2">Pro</h4>
            <p className="mb-4">R$39,90/mês – Respostas ilimitadas e suporte prioritário</p>
            <a
              href="https://pay.cakto.com.br/3aoz6xb_398640"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition inline-block"
            >
              Assinar
            </a>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="text-center text-sm text-gray-500 py-6">
        &copy; {new Date().getFullYear()} ReplyFlow AI. Todos os direitos reservados.
      </footer>
    </div>
  );
}
