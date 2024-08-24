import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LivroList from './components/LivroList';
import UsuarioList from './components/UsuarioList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/livros">Livros</Link></li>
            <li><Link to="/usuarios">Usuários</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/livros" component={LivroList} />
          <Route path="/usuarios" component={UsuarioList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
