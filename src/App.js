import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Board from './pages/Board';
import About from './pages/About';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="header">
            <div>
              <Link to="/">
                <img className="img-home" src={require('./icons/home.svg')} alt="Home"></img>
              </Link>
            </div>
            <div>
              <h4>Kanban board</h4>
            </div>
            <div>
              <Link to="/about">About</Link>
            </div>
          </div>

          <Route exact path="/" component={Home} />
          <Route path="/board/:id" component={Board} />
          <Route path="/about/" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
