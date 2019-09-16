import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { saveFavorite } from "redux/actions";

class Profile extends Component {
  _handleClick = (e, venue) => {
    e.preventDefault();
    this.props.saveFavorite(venue, false);
  };
  render() {
    const { auth, email, favs } = this.props;
    const { firstName, lastName } = this.props.profile;

    if (!auth.uid) return <Redirect to="/" />;

    return (
      <div className="container">
        <h3>
          {firstName} {lastName}
        </h3>
        <p>{email}</p>
        <h5>Favorites</h5>
        {favs.map(f => {
          return (
            <Link to={"/venue/" + f.id} key={f.id}>
              {f.name}
              &nbsp;
              <i
                className="far fa-times-circle"
                onClick={e => this._handleClick(e, f)}
              />
              <br />
            </Link>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const favs = state.firebase.profile.favorites;
  const venues = state.venues.venues;
  let venueNames = [];

  if (favs) {
    venues.forEach(venue => {
      if (favs.includes(venue.id)) {
        venueNames.push(venue);
      }
    });
  }

  return {
    email: state.firebase.auth.email,
    profile: state.firebase.profile,
    auth: state.firebase.auth,
    venues: state.venues.venues,
    favs: venueNames
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveFavorite: (venue, loved) => dispatch(saveFavorite(venue, loved))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
