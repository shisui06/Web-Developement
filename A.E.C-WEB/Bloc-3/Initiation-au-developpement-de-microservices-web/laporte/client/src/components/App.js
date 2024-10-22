import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import HowToPlay from './components/HowToPlay';
import Statistics from './components/Statistics';
import Game from './components/Game';
import Login from './Login';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1>LA PORTE</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/how-to-play">How to Play</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="/play">Play</Link>
          </nav>
          {user ? (
            <div>
              <span>{user.name} [{user.points} pts]</span>
              <button onClick={handleLogout}>Sign out</button>
            </div>
          ) : null}
        </header>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/how-to-play" component={HowToPlay} />
          <Route path="/statistics" component={Statistics} />
          <Route path="/play">
            {user ? <Game user={user} /> : <Login onLogin={handleLogin} />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;








