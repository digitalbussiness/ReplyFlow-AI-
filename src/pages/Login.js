import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch {
      setError("Falha ao entrar");
    }
    setLoading(false);
  }

  async function handleSignup(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch {
      setError("Falha ao criar conta");
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Login / Registrar</h2>
        {error && (
          <div className="mb-4 p-3 bg-red-200 text-red-800 rounded">{error}</div>
        )}
        <form>
          <label>Email</label>
          <input
            type="email"
            ref={emailRef}
            required
            className="w-full p-2 border rounded mb-4"
          />
          <label>Senha</label>
          <input
            type="password"
            ref={passwordRef}
            required
            className="w-full p-2 border rounded mb-6"
          />
          <button
            disabled={loading}
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition mb-3"
          >
            Entrar
          </button>
          <button
            disabled={loading}
            onClick={handleSignup}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Registrar
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/">Voltar para Home</Link>
        </div>
      </div>
    </div>
  );
}
