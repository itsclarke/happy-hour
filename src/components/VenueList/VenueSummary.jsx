import React, { Component } from "react";
import { connect } from "react-redux";
import { saveFavorite } from "redux/actions";

class VenueSummary extends Component {
  priceCount = price => {
    let result = "";
    for (let i = 0; i < price; i++) {
      result += "$";
    }
    return result;
  };

  toggleHeart = e => {
    e.preventDefault();
    const { loved, loggedIn } = this.props;
    if (loggedIn) {
      this.props.saveFavorite(this.props.venue, !loved);
    } else {
      alert('Please login to save favorites');
    }
  };

  render() {
    const { loved } = this.props;
    const { name, price } = this.props.venue;

    return (
      <div className="card venue-summary">
        <div className="card-content grey-text text-darken-3">
          <div className="card-title">
            {name}
            <i
              className={loved ? "fas fa-heart right" : "far fa-heart right"}
              onClick={this.toggleHeart}
            />
          </div>
          <p className="green-text text-lighten-2">{this.priceCount(price)}</p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveFavorite: (venue, loved) => dispatch(saveFavorite(venue, loved))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(VenueSummary);
