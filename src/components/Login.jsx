import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { authApi } from "../api"; // Importando a API de login

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
      
        const loginData = {
          email: email,
          senha: senha,
        };
      
        try {
          const response = await authApi.login(loginData);
      
          if (response.status === 200) {
            const data = response.data;
            localStorage.setItem("token", data.token); // Armazenando o token
            history.push("/"); // Redireciona para a página HOME após o login
          } else {
            setError("Email ou senha incorretos.");
          }
        } catch (err) {
          setError("Erro ao conectar com o servidor.");
        }
      };
      

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
