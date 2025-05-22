import React from "react";

export default function SubscriptionPlans() {
  const plans = [
    {
      name: "Premium Mensal",
      price: "R$19,90 / mês",
      link: "https://pay.cakto.com.br/d7a5uju_390194",
      features: [
        "3 variações de respostas",
        "Personalização com palavras-chave",
        "100 respostas por mês",
        "Sugestão de assinatura automática",
        "Integração com WhatsApp Web",
        "Agendamento de envio com alerta",
        "Histórico completo",
      ],
    },
    {
      name: "Pro Mensal",
      price: "R$39,90 / mês",
      link: "https://pay.cakto.com.br/3aoz6xb_398640",
      features: [
        "Todas as funcionalidades Premium",
        "Respostas ilimitadas",
        "Suporte prioritário",
        "Acesso antecipado a novas funções",
      ],
    },
    {
      name: "Premium Anual",
      price: "R$190,00 / ano",
      link: "https://pay.cakto.com.br/35jdbey_391606",
      features: [
        "3 variações de respostas",
        "Personalização com palavras-chave",
        "Respostas ilimitadas (100/mês * 12)",
        "Sugestão de assinatura automática",
        "Integração com WhatsApp Web",
        "Agendamento de envio com alerta",
        "Histórico completo",
      ],
    },
    {
      name: "Pro Anual",
      price: "R$390,00 / ano",
      link: "https://pay.cakto.com.br/3befhzx_398646",
      features: [
        "Todas as funcionalidades Premium",
        "Respostas ilimitadas",
        "Suporte prioritário",
        "Acesso antecipado a novas funções",
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className="bg-white p-6 rounded shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
          <p className="text-blue-600 font-bold mb-4">{plan.price}</p>
          <ul className="mb-4 list-disc list-inside text-gray-700">
            {plan.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <a
            href={plan.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Assinar
          </a>
        </div>
      ))}
    </div>
  );
}
