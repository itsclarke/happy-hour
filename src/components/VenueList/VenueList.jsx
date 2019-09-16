import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import VenueSummary from "./VenueSummary";

const VenueList = props => {
  const { favorites, venues } = props;
  const venueList =
    venues && favorites ? (
      venues.map(venue => {
        const loved = favorites.includes(venue.id);

        return (
          <Link to={"/venue/" + venue.id} key={venue.id} className="col s6">
            <VenueSummary venue={venue} loved={loved} />
          </Link>
        );
      })
    ) : (
      <p>No venues to show</p>
    );
  return <div className="venue-list section">{venueList}</div>;
};

const mapStateToProps = state => {
  const favorites = state.firebase.profile.favorites;

  return { favorites };
};

export default connect(
  mapStateToProps,
  null
)(VenueList);
