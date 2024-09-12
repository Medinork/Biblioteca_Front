import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import LivroList from "./components/LivroList";
import UsuarioList from "./components/UsuarioList";
import Home from "./components/Home";
import Login from "./components/Login"; // Importando o componente Login
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/livros">Gerenciar Livros</Link>
            </li>
            <li>
              <Link to="/usuarios">Gerenciar Usuários</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/livros" component={LivroList} />
          <Route path="/usuarios" component={UsuarioList} />
          <Route path="/login" component={Login} /> {/* Rota do Login */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
