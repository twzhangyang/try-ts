import React from 'react';

const Header = (props) => {
  return (
    <header className="header" data-test="header">
      <div className="wrap">
        <div className="logo" data-test="logo">
          This is our logo 
        </div>
      </div>
    </header>
  )
};

export default Header;