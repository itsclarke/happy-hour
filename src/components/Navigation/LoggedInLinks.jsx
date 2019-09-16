import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "redux/actions";

const SignedInLinks = props => {
  const { firstName, lastName } = props.profile;
  return (
    <ul className="right">
      <li>
        <a href="#/" onClick={props.logout}>
          Logout
        </a>
      </li>
      <li>
        <NavLink to="/profile" className="btn btn-floating pink lighten-1">
          {firstName ? `${firstName.charAt(0)}${lastName.charAt(0)}` : ""}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
