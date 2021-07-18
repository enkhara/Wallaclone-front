import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  LoginPage,
  PrivateRoute,
  RegisterPage,
  ForgotPasswordPage,
  NewPasswordPage,
} from '../../components/auth';
import { AdvertsPage } from '../Adverts';
import NotfoundPage from './NotFoundPage';

import './reset.css';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/login">
        <LoginPage />
      </Route>

      <Route exact path="/register">
        <RegisterPage />
      </Route>

      <Route exact path="/forgot-password">
        <ForgotPasswordPage />
      </Route>

      <Route exact path="/:new-password">
        <NewPasswordPage />
      </Route>

      <Route exact path="/">
        <AdvertsPage />
      </Route>
      <Route exact path="/404">
        <NotfoundPage />
      </Route>
      <Redirect to="/404" />
    </Switch>
  );
}

export default App;
