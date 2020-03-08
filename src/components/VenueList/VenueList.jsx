import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import VenueSummary from "./VenueSummary";

const VenueList = props => {
  const { favorites, venues, loggedIn } = props;
  console.log(props);
  const venueList =
    venues ? (
      venues.map(venue => {
        const loved = favorites ? favorites.includes(venue.id) : false;

        return (
          <Link to={"/venue/" + venue.id} key={venue.id} className="col s6">
            <VenueSummary venue={venue} loved={loved} loggedIn={loggedIn} />
          </Link>
        );
      })
    ) : (
      <p>No venues to show</p>
    );
  return <div className="venue-list section">{venueList}</div>;
};

const mapStateToProps = state => {
  const loggedIn = state.firebase.auth.uid ? true : false;
  const favorites = state.firebase.profile.favorites;

  return { loggedIn, favorites };
};

export default connect(
  mapStateToProps,
  null
)(VenueList);
