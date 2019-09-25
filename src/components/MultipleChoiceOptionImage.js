import React from 'react';
import checkIcon from '../static/check-circle.svg';

const MultipleChoiceOptionImage = (props) => {
  return (
    <li className="choice__image" onClick={props.toggleSelect}>
      <img src={props.image} alt="" />
      <div className={props.selected ? "choice__overlay" : "choice__overlay is-selected"}>
        <p>{props.label}</p>
      </div>
    </li>
  );
};

export default MultipleChoiceOptionImage;