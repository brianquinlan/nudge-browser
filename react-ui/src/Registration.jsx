import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        contactName: "",
        contactEmail: ""
      };

    this.linkLogin = this.linkLogin.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  linkLogin() {
    this.props.renderPage("Login");
  }

  // onChange={this.onTypingContactName}

  handleInput(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    // const onSubmit = e => {
    //   e.preventDefault();
    // };

    return (
      <div>
        <form className="registration">
          <h1>Register</h1>
          <h2>You</h2>
          <div className="form-field">
          <label>First Name</label>
          <input name="firstName" value={ this.state.firstName } placeholder="Jane" onChange={this.handleInput} /><br/>
          </div>
          <div className="form-field">
            <label>Last Name</label>
            <input name="lastName" value={ this.state.lastName } placeholder="Doe" onChange={this.handleInput} /><br/>
          </div>
          <div className="form-field">
            <label>Email</label>
            <input name="email" value={ this.state.email } placeholder="email@example.com" onChange={this.handleInput} /><br/>
          </div>
          <div className="form-field">
            <label>Password</label>
            <input name="password" value={ this.state.password } placeholder="Password" onChange={this.handleInput} /><br/>
          </div>
          <div className="form-field">
            <label>Password Confirmation</label>
            <input name="passwordConfirmation" value={ this.state.passwordConfirmation } placeholder="Password" onChange={this.handleInput} /><br/>
          </div>
          <h2>Your emergency contact</h2>
          <div className="form-field">
            <label>Contact's Name</label>
            <input name="contactName" value={ this.state.contactName } placeholder="Jane" onChange={this.handleInput} /><br/>
          </div>
          <div className="form-field">
            <label>Contact's Email</label>
            <input name="contactEmail" value={ this.state.contactEmail } placeholder="email@example.com" onChange={this.handleInput} /><br/>
          </div>
          <button type="submit" style={{cursor:'pointer'}}>Login</button>
        </form>
       <div>Already a user yet? <span className="formLink" onClick={ this.linkLogin } style={{cursor:'pointer'}}>Login here.</span></div>
      </div>
    );
  }
}