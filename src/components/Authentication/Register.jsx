import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { register } from "redux/actions";

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.register(this.state);
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <form onSubmit={this.handleSubmit} className="container">
        <h5>Register</h5>
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          onChange={this.handleChange}
        />
        <label htmlFor="firstName">Last name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          onChange={this.handleChange}
        />
        <label htmlFor="firstName">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={this.handleChange}
        />
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          <div className="red-text center">
            {authError ? <p>{authError}</p> : null}
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: credentials => dispatch(register(credentials))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
