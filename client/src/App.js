import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Books from './components/Books';
import Login from './components/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Books} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
