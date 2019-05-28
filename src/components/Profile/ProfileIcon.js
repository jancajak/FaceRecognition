import React from 'react';
import { 
  Dropdown, 
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem 
} from 'reactstrap';

import './ProfileIcon.css';

class ProfileIcon extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    console.log('I am here');
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  render() {
    return (
      <div className='pa4'>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle
            tag='span'
            data-toggle='dropdown'
            aria-expanded={this.state.dropdownOpen}
          >
            <img
                src="http://tachyons.io/img/logo.jpg"
                className="br-100 w3 v-mid" 
                alt="avatar" 
            />
          </DropdownToggle>
          <DropdownMenu 
            right={true}
            className='b-transparent shadow-5'
            style={{backgroundColor: 'rgba(255,255,255, 0.5)'}}
          >
            <DropdownItem onClick={this.props.toggleModal}>View Profile</DropdownItem>
            <DropdownItem onClick={() => this.props.onRouteChange('signout')}>Sign Out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default ProfileIcon;