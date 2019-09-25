import React from 'react';

const ProgressBar = (props) => {
  const percentageCalc = 7.1 * props.question;
  return (
    <div className="progress" style={{ width: `${percentageCalc}%` }}></div>
  );
};

export default ProgressBar;