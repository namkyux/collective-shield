import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeView from './components/HomeView';
import LoginView from './components/LoginView';
import MakerView from './components/MakerView';
import RequestView from './components/RequestView';

import 'input-moment/dist/input-moment.css';
import './scss/app.scss';

function App() {
  return (
    <div>
      <Router>
        <main className="main">
          <Route path="/" exact component={HomeView} />
          <Route path="/makers" component={MakerView} />
          <Route path="/requests" component={RequestView} />
          <Route path="/login" component={LoginView} />
        </main>
      </Router>
    </div>
  );
}

export default App;