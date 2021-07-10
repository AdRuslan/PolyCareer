import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Foreigner.scss';

export default function Foreigner() {
  const [foreigners, setForeigners] = useState([]);
  const [expanded, setExpanded] = useState(false);

  const getAllForeigners = async () => {
    try {
      await axios
        .get('/api/foreigners', {
          headers: { 'Content-Type': 'application/json' },
        })
        .then((response) => {
          setForeigners(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllForeigners();
  });

  return (
    <div className="container">
      <section className="info">
        {foreigners.map((item, index) => {
          return (
            <article className="question" key={index}>
              <header className="question-header">
                <h5
                  onClick={() => setExpanded(!expanded)}
                  className="question-title"
                >
                  {item.question}
                </h5>
                <button className="btn" onClick={() => setExpanded(!expanded)}>
                  {expanded ? (
                    <i className="material-icons prefix">arrow_upward</i>
                  ) : (
                    <i className="material-icons prefix">arrow_downward</i>
                  )}
                </button>
              </header>
              {expanded && <p>{item.answer}</p>}
            </article>
          );
        })}
      </section>
    </div>
  );
}
