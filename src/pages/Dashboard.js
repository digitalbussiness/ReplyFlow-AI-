import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/login");
    } catch {
      alert("Falha ao sair");
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Olá, {currentUser.email}</h1>
      <p className="mb-6">Bem-vindo ao ReplyFlow AI - Respostas automáticas personalizadas.</p>

      {/* Aqui vai a interface principal do app, para criar e ver respostas */}

      <button
        onClick={handleLogout}
        className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        Sair
      </button>
    </div>
  );
}
