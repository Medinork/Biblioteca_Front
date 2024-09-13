import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { authApi } from "./api"; // Importando a API de autenticação
import './Login.css'; // Importando o CSS para o login

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [role, setRole] = useState("USER");
  const [error, setError] = useState("");
  const history = useHistory();  // Usando o hook useHistory para navegação

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const registerData = {
      email: email,
      password: senha,
      role: role
    };

    try {
      const response = await authApi.registro(registerData);

      if (response.status === 200) {
        history.push("/login"); // Redireciona para a página principal após o login
      } else {
        setError("Algo deu errado na requisição");
      }
    } catch (err) {
      setError("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div className="login-container">
      <h2>Cadastrar</h2>
      {error && <p>{error}</p>}
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
        <div>
            <label>Função:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} name="role" id="">
                <option value="USER">Usuario Comum</option>
                <option value="ADMIN">Adm</option>
            </select>
        </div>
        <a href="/login">Possui conta? Entre!</a>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Login;
