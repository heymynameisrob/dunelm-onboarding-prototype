import React from 'react';
import Header from './Header';

const Layout = (props) => {
  return (
    <main>
      <Header history={props.history} />
      <div className={`view-wrap view-wrap__${props.align}`}>
        {props.children}
      </div>
    </main>
  );
};

export default Layout;