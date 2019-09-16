import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYnJpYW5jbGFya2UiLCJhIjoiY2p5ODF1cTA2MDM1dDNsbnFuejNoam83ayJ9.ypgXuSoKJk4rg_oadnM4jg";

const Hours = ({ props }) => {
  const day = props.day ? props.day : "unknow day";
  const hours = props.hours ? props.hours : [{ open: "00:00", close: "00:00" }];
  return (
    <p>
      {day}:
      {hours.map(i => {
        return (
          <span key={Math.random()}>
            <br />
            {moment(i.open, "HH:mm").format("h:mma")} -{" "}
            {moment(i.close, "HH:mm").format("h:mma")}
          </span>
        );
      })}
    </p>
  );
};

const VenueDetails = props => {
  console.log("props", props);
  const { venue } = props;
  const { address, city, state, postalCode, lat, lng } = venue.location;
  const viewport = {
    width: "100%",
    height: 400,
    latitude: lat,
    longitude: lng,
    zoom: 15
  };
  if (venue) {
    return (
      <div className="container section project-details">
        <h2>{venue.name}</h2>
        <p className="address">
          {address}
          <br />
          {city}, {state} {postalCode}
        </p>
        <code>
          {props.venue.hours ? (
            props.venue.hours.map(d => {
              const { day, hours } = d;
              return <Hours props={d} key={day} />;
            })
          ) : (
            <span>unknown</span>
          )}
        </code>
        <div className="map-container">
          <div className="top" />
          <ReactMapGL {...viewport} mapboxApiAccessToken={MAPBOX_TOKEN}>
            <Marker key={venue.id} latitude={lat} longitude={lng} zoom={15} />
          </ReactMapGL>
          <div className="bottom" />
        </div>
      </div>
    );
  } else {
    return <div className="container center">Loading project...</div>;
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const venues = state.venues.venues;
  const venue = venues.find(venue => venue.id === id);
  return { venue };
};

export default connect(mapStateToProps)(VenueDetails);
