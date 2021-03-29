/* eslint-disable react/no-array-index-key */
import React from 'react';
import edu from '../../data/education.json';

const Education = () => {
  const eduHTMl = edu.map(i => (
    <div key={i.id} className="edu_item">
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
  return (
    <div className="edu" id="education">
      <h2 className="edu_title">Education</h2>
      {eduHTMl}
    </div>
  );
};

export default Education;
