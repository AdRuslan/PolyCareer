import React from 'react';

import './MyVacancies.scss';

export default function MyVacancies() {
  return (
    <div className="container">
      <div className="my_vacancies-page">
        <h4>Разместить вакансию:</h4>
        <form className="form form-login">
          <div className="row">
            <div className="input-field col s6">
              <input type="text" id="name" name="name" className="validate" />
              <label htmlFor="name">Название</label>
            </div>

            <div className="input-field col s6">
              <input type="text" id="activity" name="activity" className="validate" />
              <label htmlFor="activity">Профиль деятельности</label>
            </div>

            <div className="input-field col s6">
              <input type="text" id="position" name="position" className="validate" />
              <label htmlFor="position">Должность</label>
            </div>

            <div className="input-field col s6">
              <input type="text" id="salary" name="salary" className="validate" />
              <label htmlFor="salary">Зарплата</label>
            </div>

            <div className="input-field col s12">
              <textarea
                id="description"
                name="description"
                className="materialize-textarea validate"
              ></textarea>
              <label htmlFor="description">Описание</label>
            </div>

            <div className="input-field col s6">
              <i class="material-icons prefix">phone</i>
              <input id="telephone" type="tel" class="validate" />
              <label for="telephone">Telephone</label>
            </div>

            <div class="input-field col s6">
              <i class="material-icons prefix">email</i>
              <input id="email" type="email" class="validate" />
              <label for="email">Email</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
