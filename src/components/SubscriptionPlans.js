import React from "react";

export default function SubscriptionPlans({ onSelectPlan }) {
  const plans = [
    {
      id: "premium-monthly",
      name: "Premium Mensal",
      price: "R$19,90 / mês",
      paymentLink: "https://pay.cakto.com.br/d7a5uju_390194",
    },
    {
      id: "pro-monthly",
      name: "PRO Mensal",
      price: "R$39,90 / mês",
      paymentLink: "https://pay.cakto.com.br/3aoz6xb_398640",
    },
    {
      id: "premium-yearly",
      name: "Premium Anual",
      price: "R$190,00 / ano",
      paymentLink: "https://pay.cakto.com.br/35jdbey_391606",
    },
    {
      id: "pro-yearly",
      name: "PRO Anual",
      price: "R$390,00 / ano",
      paymentLink: "https://pay.cakto.com.br/3befhzx_398646",
    },
  ];

  return (
    <div className="p-4 bg-white rounded shadow mt-6">
      <h3 className="text-xl font-bold mb-4">Escolha seu plano</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {plans.map((plan) => (
          <div key={plan.id} className="border rounded p-4">
            <h4 className="font-semibold mb-2">{plan.name}</h4>
            <p className="mb-2">{plan.price}</p>
            <a
              href={plan.paymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Assinar
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
