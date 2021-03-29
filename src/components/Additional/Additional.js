/* eslint-disable react/no-array-index-key */
import React from 'react';
import additional from '../../data/additional.json';

const Additional = () => {
  const expHTMl = additional.other.map(i => (
    <div key={i.id} className="exp_item">
      <h3 className="item_title">{i.title}</h3>
      <p className="item_org">{i.org}</p>
      <p className="item_location">{i.location}</p>
      <p className="item_period">{i.period}</p>
      <ul className="item_tasks">
        {i.tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  ));
  const hobbiesHTMl = additional.hobbies.map((i, index) => (
    <p key={index} className="hobbies_title">{i}</p>
  ));
  const langHTMl = Object.keys(additional.languages).map((l, index) => (
    <li key={index}>
      {l.charAt(0).toUpperCase() + l.slice(1)}
      {' '}
      -
      {' '}
      {additional.languages[l]}
    </li>
  ));
  return (
    <div className="add" id="additional">
      <div className="add_exp">
        <h2 className="exp_title">Additional Experience</h2>
        {expHTMl}
      </div>
      <div className="add_hobbies">
        <h2 className="hobbies_title">Hobbies</h2>
        {hobbiesHTMl}
      </div>
      <div className="add_lang">
        <h2 className="lang_title">Languages</h2>
        <ul className="lang_items">
          {langHTMl}
        </ul>
      </div>
    </div>
  );
};

export default Additional;
