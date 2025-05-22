import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/login");
    } catch {
      alert("Erro ao sair da conta.");
    }
  }

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/dashboard" className="text-xl font-bold text-blue-600">
        ReplyFlow AI
      </Link>
      {currentUser && (
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Sair
        </button>
      )}
    </nav>
  );
}
