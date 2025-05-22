import React from "react";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Planos e Preços</h1>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="border p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">Plano Premium</h2>
          <p className="mb-4">Acesso completo às funcionalidades principais.</p>
          <ul className="mb-4 list-disc list-inside text-sm text-gray-600">
            <li>Respostas automáticas ilimitadas</li>
            <li>Integração com e-mail e WhatsApp</li>
            <li>Check-ins de produtividade</li>
          </ul>
          <p className="font-bold mb-2">R$ 19,90/mês</p>
          <a
            href="https://pay.cakto.com.br/d7a5uju_390194"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Assinar Mensal
          </a>
          <br />
          <a
            href="https://pay.cakto.com.br/35jdbey_391606"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-blue-600 underline"
          >
            Assinar Anual (R$ 190,00)
          </a>
        </div>

        <div className="border p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">Plano PRO</h2>
          <p className="mb-4">Ideal para profissionais e pequenos negócios.</p>
          <ul className="mb-4 list-disc list-inside text-sm text-gray-600">
            <li>Todas as funções do Premium</li>
            <li>Respostas com IA mais avançadas</li>
            <li>Suporte prioritário</li>
          </ul>
          <p className="font-bold mb-2">R$ 39,90/mês</p>
          <a
            href="https://pay.cakto.com.br/3aoz6xb_398640"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Assinar Mensal
          </a>
          <br />
          <a
            href="https://pay.cakto.com.br/3befhzx_398646"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-blue-600 underline"
          >
            Assinar Anual (R$ 390,00)
          </a>
        </div>
      </div>
    </div>
  );
}
