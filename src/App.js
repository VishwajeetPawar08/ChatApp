import React from 'react';
import 'rsuite/dist/rsuite.min.css';
import './styles/main.scss';
import { Switch, Route } from 'react-router';
import SignIn from './pages/SignIn';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';

function App() {
  return (
    <Switch>
      <PublicRoute path="/signin">
        <SignIn />
      </PublicRoute>
      <PrivateRoute path="/">
        <Home />
      </PrivateRoute>
    </Switch>
  );
}

export default App;
