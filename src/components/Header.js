import React from 'react';
import backArrow from '../static/arrow-left.svg';


const styles = {
  header: {
    padding: '0 16px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 56,
    boxShadow: '0 2px 4px rgba(0,0,0,0.10)'
  }
}

const Header = (props) => {
  const backLink = props.history.goBack;
  return (
    <header className="top-bar">
      <button onClick={backLink}>
        <img src={backArrow} alt="" />
      </button>
    </header>
  );
};

export default Header;