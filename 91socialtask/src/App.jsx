import React, { Component } from 'react'
import './App.css';


export default class App extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    password: '',
    address: '',
  }

  // formRef = React.createRef();

  onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // validation here
    if (this.state.name.length < 1) {
      alert('invalid name');
      return;
    } else if (!(/[a-zA-Z0-9._]*@[a-zA-Z0-9]*\.[a-z]*$/.test(this.state.email))) {
      alert('invalid email');
      return;
    } else if( (this.state.phone.length!=10) && !(/[^0-9]/.test(this.state.phone)) ) {
    alert('invalid phone');
    return;
    } else if (this.state.password.length < 8){
      alert('Password has to be 8 characters long');
      return;
    } else if (this.state.address.length > 50){
      alert('please keep address within 50 characters');
      return;
    }

    // submit here
    this.setState({ submitted: true})
  }

  nameChangeHandler = (e) => {
    const newVal = e.target.value;
    this.setState({ name: newVal });
  }

  emailChangeHandler = (e) => {
    const newVal = e.target.value;
    this.setState({ email: newVal });
  }

  phoneChangeHandler = (e) => {
    const newVal = e.target.value;
    this.setState({ phone: newVal });
  }

  passwordChangeHandler = (e) => {
    const newVal = e.target.value;
    this.setState({ password: newVal });
  }


  addressChangeHandler = (e) => {
    const newVal = e.target.value;
    this.setState({ address: newVal });
  }



  render() {
    return (
      <div className="app-root">
        {
          !this.state.submitted ? (
            <React.Fragment>
              <h2>
                Welcome to 91social
              </h2>
              <input onChange={this.nameChangeHandler} value={this.state.name} placeholder="name" type="text" name="name" id="" />
              <input onChange={this.emailChangeHandler} value={this.state.email} placeholder="email" type="email" name="email" id="" />
              <input onChange={this.phoneChangeHandler}  value={this.state.phone} placeholder="phone" type="tel" name="tel" id="" />
              <input onChange={this.passwordChangeHandler} value={this.state.password} placeholder="password" type="password" name="password" id=""/>
              <input onChange={this.addressChangeHandler}  value={this.state.address} placeholder="address" type="text" name="address" id=""/>
              <button type="submit" onClick={this.onSubmit} >
                Submit
              </button>
            </React.Fragment>
          ) : (
            <div className="success-state">
              <h2>
                Form Submitted
              </h2>
              <p>Name: {this.state.name}</p>
              <p>E-mail: {this.state.email}</p>
              <p>Phone: {this.state.phone}</p>
              <p>Address: {this.state.address}</p>
            </div>
          )
        }

      </div>
    )
  }
}
