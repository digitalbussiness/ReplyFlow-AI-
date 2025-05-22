import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import SubscriptionPlans from "../components/SubscriptionPlans";

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Falha ao sair");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Bem-vindo, {currentUser.email}</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
        >
          Sair
        </button>
      </header>

      {error && <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>}

      <main>
        <h2 className="text-2xl font-semibold mb-4">Seus Planos</h2>
        <SubscriptionPlans />
        {/* Aqui pode ter outras funcionalidades do dashboard */}
      </main>
    </div>
  );
}
