import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("As senhas não coincidem");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch {
      setError("Falha ao criar a conta");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Cadastre-se no ReplyFlow AI</h2>
        {error && <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            ref={emailRef}
            required
            className="w-full p-2 mb-4 border rounded"
          />
          <label htmlFor="password" className="block mb-1 font-medium">
            Senha
          </label>
          <input
            id="password"
            type="password"
            ref={passwordRef}
            required
            className="w-full p-2 mb-4 border rounded"
          />
          <label htmlFor="password-confirm" className="block mb-1 font-medium">
            Confirme a Senha
          </label>
          <input
            id="password-confirm"
            type="password"
            ref={passwordConfirmRef}
            required
            className="w-full p-2 mb-6 border rounded"
          />
          <button
            disabled={loading}
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Criar Conta
          </button>
        </form>
        <div className="mt-4 text-center">
          Já tem uma conta?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Entrar
          </Link>
        </div>
      </div>
    </div>
  );
}
