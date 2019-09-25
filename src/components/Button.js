import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
  return (
    <Link to={props.path}>
      <button class={`button button-${props.type}`}>
        {props.label}
      </button>
    </Link>
  );
};

export default Button;