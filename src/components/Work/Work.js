/* eslint-disable react/no-array-index-key */
import React from 'react';
import work from '../../data/work.json';

const Work = () => {
  const workHTMl = work.map(i => (
    <div key={i.id} className="work_item">
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
    <div className="work" id="work">
      <h2 className="work_title">Work Experience</h2>
      {workHTMl}
    </div>
  );
};

export default Work;
