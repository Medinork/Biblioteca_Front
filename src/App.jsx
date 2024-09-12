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
          <Route path="/login" component={Login} />
          {/* Se estiver autenticado, pode acessar as demais rotas */}
          <Route
            path="/"
            exact
            render={() =>
              isAuthenticated ? (
                <Home />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            path="/livros"
            render={() =>
              isAuthenticated ? (
                <LivroList />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            path="/usuarios"
            render={() =>
              isAuthenticated ? (
                <UsuarioList />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          {/* Redireciona qualquer rota não definida para a página de login */}
          <Route
            path="*"
            render={() => <Redirect to={isAuthenticated ? "/" : "/login"} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
