import react from "react";

export class Login extends react.Component {
  state = {
    username: "",
    password: "",
    remember: false,
    btnenable: true,
  };

  logInEventHandler = (event) => {
    const name = event.target.name;
    const type = event.target.type;
    const value = event.target.value;
    const check = event.target.checked;

    this.setState({
      [name]: type === "checkbox" ? check : value,
    });

    if (this.state.username && this.state.password) {
      this.setState({
        btnenable: false,
      });
    }
  };


  btnClickHandler = () => {
    this.props.onLogin(this.state);
  };

  render() {
    return (
      <div>
        <input
          name="username"
          value={this.state.username}
          onChange={this.logInEventHandler}
        />
        <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.logInEventHandler}
        />
        <input
          name="remember"
          type="checkbox"
          checked={this.state.remember}
          onChange={this.logInEventHandler}
        />
        <button
          disabled={this.state.btnenable}
          onClick={this.btnClickHandler}
        >
          Log In!
        </button>
      </div>
    );
  }
}
