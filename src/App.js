import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import BoardComponent from './components/board-component';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={BoardComponent} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
