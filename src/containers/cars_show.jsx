import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import { fetchCar } from '../actions/index';
import { fetchOwners } from '../actions/index';
import { deleteCar } from '../actions/index';

class CarsShow extends Component {
  componentWillMount() {
    this.props.fetchOwners(this.props.garage);
    if (!this.props.car) {
      console.log("this car show is mounting");
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  handleClick = () => {
    this.props.deleteCar(this.props.history, this.props.car);
  }

  render() {
    console.log("the show car:");
    console.log(this.props.car);
    if (this.props.car) {
      return (
        <div className="car-info">
          <h1>{this.props.car["brand"]}</h1>
          <p>{this.props.car["model"]}</p>
          <p>{this.props.car["plate"]}</p>
          <p>{this.props.car["owner"]}</p>
          <button onClick={this.handleClick} car={this.props.car}>Delete car</button>
        </div>
      );
    } else {
      return (
        <p>loading...</p>
      );
    }
  }
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  console.log("this is the state:");
  console.log(state);
  const car = state.owners.find(p => p.id === idFromUrl);
  return { car: car, garage: state.garage };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar: fetchCar, fetchOwners: fetchOwners, deleteCar: deleteCar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
