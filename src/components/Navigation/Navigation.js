import React from 'react';
import ProfileIcon from '../Profile/ProfileIcon';

import './Navigation.css';

const Navigation = ({ onRouteChange, route, toggleModal }) => {
    return (
      <nav className='flex justify-end'>
        {
          route === 'home' 
            ? <ProfileIcon onRouteChange={onRouteChange} toggleModal={toggleModal} />
            : null
        }
        {
          route !== 'home'
            ? (
                <p 
                  onClick={() => onRouteChange(route === 'signin' ? 'register' : 'signin')} 
                  className='f3 link dim black pa4 pointer'
                >
                {route === 'signin' ? 'Register' : 'Sign In'}
                </p>
              )
            : null
        }
      </nav>
    );
}

export default Navigation;
