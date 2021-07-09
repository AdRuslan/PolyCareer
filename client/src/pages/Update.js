import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

export default function Update(props) {
  const [form, setForm] = useState({});
  const id = props.match.params.id;

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const updateVacancy = async (id) => {
    try {
      await axios.patch(
        `/api/vacancy/update/${id}`,
        { ...form },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  // const getOneVacancy = async (id) => {
  //   try {
  //     await axios
  //       .get(`/api/vacancy/one/${id}`, {
  //         headers: { 'Content-Type': 'application/json' },
  //       })
  //       .then((response) => {
  //         setLoaded(true);
  //         setForm(response.data);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="container">
      <h4>Изменить:</h4>
      <form className="form form-login" onSubmit={(e) => e.preventDefault()}>
        <div className="row">
          <div className="input-field col s6">
            <input
              type="text"
              id="name"
              name="name"
              className="validate"
              value={form.name}
              onChange={changeHandler}
            />
            <label htmlFor="name">Название компании</label>
          </div>

          <div className="input-field col s6">
            <input
              type="text"
              id="activity"
              name="activity"
              className="validate"
              value={form.activity}
              onChange={changeHandler}
            />
            <label htmlFor="activity">Профиль деятельности</label>
          </div>

          <div className="input-field col s6">
            <input
              type="text"
              id="position"
              name="position"
              className="validate"
              value={form.position}
              onChange={changeHandler}
            />
            <label htmlFor="position">Должность</label>
          </div>

          <div className="input-field col s6">
            <input
              type="number"
              id="salary"
              name="salary"
              className="validate"
              value={form.salary}
              onChange={changeHandler}
              min="0"
            />
            <label htmlFor="salary">Зарплата (в рублях)</label>
          </div>

          <div className="input-field col s12">
            <textarea
              id="description"
              name="description"
              className="materialize-textarea validate"
              value={form.description}
              onChange={changeHandler}
            ></textarea>
            <label htmlFor="description">Описание</label>
          </div>

          <div className="input-field col s6">
            <i className="material-icons prefix">phone</i>
            <input
              id="telephone"
              type="tel"
              className="validate"
              value={form.telephone}
              onChange={changeHandler}
              name="telephone"
            />
            <label htmlFor="telephone">Telephone</label>
          </div>

          <div className="input-field col s6">
            <i className="material-icons prefix">email</i>
            <input
              id="email"
              type="email"
              className="validate"
              name="email"
              value={form.email}
              onChange={changeHandler}
            />
            <label htmlFor="email">Email</label>
          </div>
        </div>

        <div className="row">
          <Link to="/">
            <button
              className="waves-effect waves-light btn add-btn"
              onClick={() => updateVacancy(id)}
            >
              Обновить
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
