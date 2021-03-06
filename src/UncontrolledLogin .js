import React, { Component } from "react";

export default class UncontrolledLogin extends Component {
  submitForm = (event) => {
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const checkbox = event.target.elements.checkbox.value;
    this.props.onLogin(username, password, checkbox);
    console.log(username, password, checkbox);
  };

  componentDidMount = () => {
    this.username.focus();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input ref={input => (this.username = input)} name="username" type="text"></input>
          <input name="password" type="password"></input>
          <input name="checkbox" type="checkbox"></input>
          <button name="submit-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}
