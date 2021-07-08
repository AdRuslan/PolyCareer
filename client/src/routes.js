import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MyVacancies from './pages/MyVacancies';
import AuthPage from './pages/AuthPage';
import AllVacancies from './pages/AllVacancies';
import About from './pages/About';

export const useRoutes = (isLogin) => {
  if (isLogin) {
    return (
      <Switch>
        <Route path="/" exact component={MyVacancies} />
        <Route path="/vacancies" exact component={AllVacancies} />
        <Route path="/about" exact component={About} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/login" exact component={AuthPage} />
      <Route path="/registration" exact component={AuthPage} />
      <Redirect to="/login" />
    </Switch>
  );
};
