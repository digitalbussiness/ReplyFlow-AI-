import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const displayNameRef = useRef();
  const { currentUser, updateProfileInfo, logout } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Falha ao sair.");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      setLoading(true);
      await updateProfileInfo(displayNameRef.current.value);
      setMessage("Perfil atualizado com sucesso!");
    } catch {
      setError("Falha ao atualizar perfil.");
    }
    setLoading(false);
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl mb-4">Perfil do Usuário</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {message && <div className="text-green-500 mb-4">{message}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          ref={displayNameRef}
          defaultValue={currentUser.displayName || ""}
          placeholder="Nome de exibição"
          className="w-full px-4 py-2 border rounded"
        />
        <button
          disabled={loading}
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Atualizar Perfil
        </button>
      </form>
      <button
        onClick={handleLogout}
        className="mt-4 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
      >
        Sair
      </button>
    </div>
  );
}
