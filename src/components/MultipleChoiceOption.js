import React from 'react';
import checkIcon from '../static/check-circle.svg';

const MultipleChoiceOption = (props) => {
  return (
    <li className="choice__text" onClick={props.toggleSelect}>
      <div className={props.selected ? "choice__overlay" : "choice__overlay is-selected"}></div>
      <p>{props.label}</p>
    </li>
  );
};

export default MultipleChoiceOption;