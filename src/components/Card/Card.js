/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './Card.scss';

const Card = () => (
  <div className="card" id="about">
    <div className="card_intro">
      <h1 className="intro_name">Anastasia Ponomarenko</h1>
      <p className="intro_title">
        Full Stack JavaScript Developer at
        {' '}
        {'</salt>'}
        {' '}
        & Master&apos;s Student
      </p>
      <div className="intro_contacts">
        <p className="contacts_location">
          <i className="fas fa-map-pin" />
          {' '}
          Gothenburg, Sweden
        </p>
        <p className="contacts_phone">
          <a href="tel:+46764417177">+46764417177</a>
        </p>
        <p className="contacts_email">
          <a href="mailto:anastasiia.v.ponomarenko@gmail.com">anastasiia.v.ponomarenko@gmail.com</a>
        </p>
        <div className="contacts_incons">
          <a href="https://github.com/anastasia-pon"><i className="fab fa-github" /></a>
          {' '}
          <a href="https://www.linkedin.com/in/anastasia-ponomarenko-edtech/"><i className="fab fa-linkedin-in" /></a>
        </div>
      </div>
    </div>
    <div className="card_presentation">
      <p className="presentation_text">
        Professional individual with experience across a range of technical
        environments including e-learning, web design and teaching and video
        content creation. Ability to deliver technical projects with a focus on client
        requirements and ensuring customer satisfaction.
        Academic and professional experience in web with a passion for upskilling and
        technology and supporting users through innovative digital solutions.
      </p>
      <p className="presentation_skills">
        JavaScript
        WordPress
        HTML, CSS
        Git
        SQL
        Basic Python
        Basic PHP
        SPSS, Video Editing
      </p>
    </div>
  </div>
);

export default Card;
