import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import { fetchOwners } from '../actions';

// ability to link
import { Link } from 'react-router-dom';

class CarsIndex extends Component {

  componentWillMount() {
    this.props.fetchOwners(this.props.garage);
    console.log("messages have been fetched");
  }

  renderOwners() {
    return this.props.owners.map((owner) => {
      return (
        <Link to={`/cars/${owner.id}`} key={owner.id}>
          <div className="owner-card" >
            <h5><strong>{owner.brand}-{owner.model}</strong></h5>
            <p><strong>Owner:</strong> {owner.owner}</p>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div className="app"
        style={{display: "flex"}}>
        <div className="my-garage"
          style={{width: "30%", minWidth: "200px"}}>
          <h1>{this.props.garage}</h1>
          <p>
            Our garage is the best.
            Reasonable Prices, always on time,
            we are the best (and fictionnal).
          </p>
          <Link to="/cars/new" className="btn btn-primary">
            Add a car
          </Link>
        </div>
        <div className="index"
          style={{width: "70%"}}>
          {this.renderOwners()}
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    owners: state.owners,
    garage: state.garage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchOwners : fetchOwners }, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
