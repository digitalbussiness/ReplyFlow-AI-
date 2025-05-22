import React from "react";
import SubscriptionPlans from "../components/SubscriptionPlans";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Planos de Assinatura ReplyFlow AI
      </h1>
      <p className="text-center text-gray-700 mb-10">
        Escolha o plano que mais combina com seu ritmo de trabalho e economize
        tempo respondendo mensagens com inteligência artificial.
      </p>
      <SubscriptionPlans />
    </div>
  );
}
