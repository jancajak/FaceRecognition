import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, route }) => {
    if(route === 'signin') {
      console.log(route);
      return (
        <nav>
          <p onClick={() => onRouteChange('register')} className='f3 link dim black pa4 pointer'>Register</p>
        </nav>
      )
    } else if(route === 'register' || route ==='signout') {
      console.log(route);
      return (
        <nav>
          <p onClick={() => onRouteChange('signin')} className='f3 link dim black pa4 pointer'>Sign In</p>
        </nav>
      );
    } else {
      console.log(route);
      return (
        <nav>
          <p onClick={() => onRouteChange('signin')} className='f3 link dim black pa4 pointer'>Sign Out</p>
        </nav>
      );
    }
}

export default Navigation;
