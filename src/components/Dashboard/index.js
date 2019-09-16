import React from "react";
import { connect } from "react-redux";
import { Search, Sort } from "components/Search";
import { VenueList } from "components/VenueList";

const Dashboard = props => {
  return (
    <div className="container row">
      <Search />
      <Sort />
      <VenueList venues={props.venues} />
    </div>
  );
};

const mapStateToProps = state => {
  return { venues: state.venues.venues };
};

export default connect(mapStateToProps)(Dashboard);
