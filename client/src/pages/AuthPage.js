import React from 'react';

import './AuthPage.scss';

export default function AuthPage() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="auth-page">
          <h3>Авторизация</h3>
          <form className="form from-login">
            <div className="row">
              <div className="input-field col s12">
                <input type="email" name="email" className="validate" />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field pas-input col s12">
                <input type="password" name="password" className="validate" />
                <label htmlFor="password">Пароль</label>
              </div>
              <div className="row">
                <button className="waves-effect waves-light btn ">Войти</button>
                <a href="/" className="btn-outline btn-reg">
                  Нет аккаунта?
                </a>
              </div>
            </div>
          </form>

          <h3>Регистрация</h3>
          <form className="form from-login">
            <div className="row">
              <div className="input-field col s12">
                <input type="email" name="email" className="validate" />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field pas-input col s12">
                <input type="password" name="password" className="validate" />
                <label htmlFor="password">Пароль</label>
              </div>
              <div className="row">
                <button className="waves-effect waves-light btn ">Регистрация</button>
                <a href="/" className="btn-outline btn-reg">
                  Уже есть аккаунт?
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
