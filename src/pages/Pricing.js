import React from "react";
import SubscriptionPlans from "../components/SubscriptionPlans";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-3xl font-bold mb-6 text-center">Planos e Preços</h1>
        <SubscriptionPlans />
      </div>
    </div>
  );
}
