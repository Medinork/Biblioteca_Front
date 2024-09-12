import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import LivroList from "./components/LivroList";
import UsuarioList from "./components/UsuarioList";
import Home from "./components/Home";
import Login from "./components/Login";
import "./App.css";

function App() {
  const isAuthenticated = localStorage.getItem("token") !== null; // Verifica se o usuário está autenticado
 
  return (
<Router>
<div className="App">
<Switch>
          {/* Se não estiver autenticado, redireciona para a página de login */}
          {!isAuthenticated && <Redirect to="/login" />}
          {/* Rota para o login */}
<Route path="/login" component={Login} />
          {/* Se estiver autenticado, pode acessar as demais rotas */}
<Route path="/" exact component={Home} />
<Route path="/livros" component={LivroList} />
<Route path="/usuarios" component={UsuarioList} />
</Switch>
</div>
</Router>
  );
}

export default App;
