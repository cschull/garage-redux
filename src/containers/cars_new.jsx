import React, { Component } from 'react';

// import field packages
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

// import actions from reducer
import { createOwner } from '../actions';

class CarsNew extends Component {

  onSubmit = (values) => {
    console.log("values:");
    console.log(values["brand"]);
    this.props.createOwner(this.props.garage, values, () => {
      this.props.history.push('/');
    });
  }

  // renderField(field) {
  //   return (
  //     <div className="form-group">
  //       <label>{field.label}</label>
  //       <input
  //         className="form-control"
  //         type={field.type}
  //         name={field.name}
  //         placeholder={field.placeholder}
  //       />
  //     </div>
  //   );
  // }

  render() {
    return (
      <div className="form-group">
        <h2>Enter a new car</h2>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className="form-group">
            <label htmlFor="InputBrand">Brand</label>
            <Field name="brand" type="text" placeholder="Aston Martin" component="input" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="InputModel">Model</label>
            <Field name="model" type="text" placeholder="DB Mark III" component="input" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="InputOwner">Owner</label>
            <Field name="owner" type="text" placeholder="James Bond" component="input" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="InputPlate">Plate</label>
            <Field name="plate" type="text" placeholder="DB Mark III" component="input" className="form-control" />
          </div>
          <button type="submit">Add car</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

// we do not need to dispatch to get the action
export default reduxForm({
  form: 'newCarForm'
})(
  connect(mapStateToProps, { createOwner })(CarsNew)
);
