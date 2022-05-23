import react from "react";

export class Login extends react.Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  logInEventHandler = (event) => {
    const name = event.target.name;
    const type = event.target.type;
    const value = event.target.value;
    const check = event.target.checked;

    this.setState({
      [name]: type === "checkbox" ? check : value,
    });
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
      </div>
    );
  }
}
