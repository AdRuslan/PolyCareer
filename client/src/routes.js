import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MyVacancies from './pages/MyVacancies';
import AuthPage from './pages/AuthPage';

export const useRoutes = (isLogin) => {
  if (isLogin) {
    return (
      <Switch>
        <Route path="/my_vacancies" exact component={MyVacancies} />
        <Redirect to="/my_vacancies" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/login" exact component={AuthPage} />
      <Redirect to="/login" />
    </Switch>
  );
};
