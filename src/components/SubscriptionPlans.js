import React from "react";

const plans = [
  {
    id: "premium-monthly",
    title: "Premium Mensal",
    price: "R$19,90 / mês",
    link: "https://pay.cakto.com.br/d7a5uju_390194",
  },
  {
    id: "pro-monthly",
    title: "Pro Mensal",
    price: "R$39,90 / mês",
    link: "https://pay.cakto.com.br/3aoz6xb_398640",
  },
  {
    id: "premium-yearly",
    title: "Premium Anual",
    price: "R$190,00 / ano",
    link: "https://pay.cakto.com.br/35jdbey_391606",
  },
  {
    id: "pro-yearly",
    title: "Pro Anual",
    price: "R$390,00 / ano",
    link: "https://pay.cakto.com.br/3befhzx_398646",
  },
];

export default function SubscriptionPlans() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {plans.map(({ id, title, price, link }) => (
        <div
          key={id}
          className="border rounded p-6 shadow hover:shadow-lg transition cursor-pointer"
          onClick={() => window.open(link, "_blank")}
        >
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-700 mb-4">{price}</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Assinar
          </button>
        </div>
      ))}
    </div>
  );
}
