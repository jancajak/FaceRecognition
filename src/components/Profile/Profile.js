import React from 'react';
import './Profile.css';

class Profile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: props.user.name,
      age: props.user.age,
      pet: props.user.pet
    };
  }

  onFormChange = (event) => {
    switch(event.target.name) {
      case 'user-name':
        this.setState({ name: event.target.value });
        break;
      case 'user-age':
        this.setState({ age: event.target.value });
        break;
      case 'user-pet':
        this.setState({ pet: event.target.value });
        break;
      default:
        return;  
    }
  };

  onProfileUpdate = (data) => {
    fetch(`http://localhost:3000/profile/${this.props.user.id}`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ formInput: data })
    })
    .then(res => {
      this.props.toggleModal();
      this.props.loadUser({ ...this.props.user, ...data });
    })
    .catch(console.log('error'));
  };

  render() {
    const { toggleModal } = this.props;
    const { name, age, pet } = this.state;

    return (
      <div 
        className='profile-modal'
      >
        <article className="br4 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
          <main className="pa4 black-80 w-80">
            <img
              src="http://tachyons.io/img/logo.jpg"
              className="br-100 w3 v-mid" 
              alt="avatar" 
            />
            <h1>{this.state.name}</h1>
            <h4>Images submitted: 5</h4>
            <p>Member since: January</p>
            <hr />
            <label className="mt2 fw6" htmlFor="user-name">Name: </label>
            <input
              value={this.state.name}
              onChange={this.onFormChange}
              className="pa2 ba w-100"
              placeholder='Type your name'
              type="text"
              name="user-name"
              id="name"
            />
            <label className="mt2 fw6" htmlFor="user-name">Age: </label>
            <input
              value={this.state.age}
              onChange={this.onFormChange}
              className="pa2 ba w-100"
              placeholder='Type your age'
              type="text"
              name="user-age"
              id="name"
            />
            <label className="mt2 fw6" htmlFor="user-name">Pet: </label>
            <input
              value={this.state.pet}
              onChange={this.onFormChange}
              className="pa2 ba w-100"
              placeholder='Type your pet'
              type="text"
              name="user-pet"
              id="name"
            />
            <div className='mt4' style={{display: 'flex', justifyContent: 'space-evenly'}}>
              <button 
                className='b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20'
                onClick={() => this.onProfileUpdate({name, age, pet})}
              >
                Save
              </button>
              <button 
                className='b pa2 grow pointer hover-white w-40 bg-light-red b--black-20'
                onClick={toggleModal}
              >
                Cancel
              </button>
            </div>
          </main>
          <div className='modal-close' onClick={toggleModal}>&times;</div>
          </article>
      </div>
    );
  }
}

export default Profile;