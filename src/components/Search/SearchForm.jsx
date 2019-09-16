import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { search, updateResults } from "redux/actions";
import { CLIENT_ID, CLIENT_SECRET } from "config/foursqaure.config";

const pingFS = query => {
  return axios
    .get("https://api.foursquare.com/v2/venues/explore", {
      params: {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        ll: "40.0292888,-105.3100174",
        query,
        v: "20180323"
      }
    })
    .then(res => {
      return res.data.response.groups[0].items;
    });
};

class Search extends Component {
  state = {
    search: "",
    venues: []
  };

  handleSubmit = e => {
    e.preventDefault();
    pingFS(this.state.search).then(res => {
      this.props.updateResults(res);
      this.setState({ search: "" });
    });
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <div className="section">
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <input
            type="text"
            id="search"
            value={this.state.search}
            onChange={this.handleChange}
            placeholder="search"
          />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    search: input => dispatch(search(input)),
    updateResults: input => dispatch(updateResults(input))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Search);
