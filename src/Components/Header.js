import React from 'react';

class Header extends React.Component {
  render(){
  return (
    <header>
      <img src={process.env.PUBLIC_URL + '/img/banner.png'} alt='banner' />
    </header>
  );
  }
}
export default Header;
