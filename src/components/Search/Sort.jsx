import React, { Component } from "react";
import { connect } from "react-redux";
import { sortResults } from "redux/actions";

class SortResults extends Component {
  state = {
    ascending: true
  };

  handleChange = () => {
    this.props.sortResults(this.state);
    this.setState({ ascending: !this.state.ascending });
  };

  render() {
    const { ascending } = this.state;
    return (
      <div className="sort">
        <button className="btn" onClick={this.handleChange}>
          <i className={ascending ? "fas fa-angle-down" : "fas fa-angle-up"} />
          <span style={{ display: "inline-block", marginLeft: "10px" }}>
            price
          </span>
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    sortResults: sort => dispatch(sortResults(sort))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortResults);
