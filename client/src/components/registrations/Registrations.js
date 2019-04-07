import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import RegistrationItem from "./RegistrationItem";
import { getRegistrations } from "../../actions/registrationActions";

class Registrations extends Component {
  componentDidMount() {
    this.props.getRegistrations();
  }

  render() {
    const { registrations, loading } = this.props.registration;
    let registrationItems;

    if (registrations === null || loading) {
      registrationItems = <Spinner />;
    } else {
      if (registrations.length > 0) {
        registrationItems = registrations.map(registration => (
          <RegistrationItem
            key={registration._id}
            registration={registration}
          />
        ));
      } else {
        registrationItems = <h4>No registrations found...</h4>;
      }
    }

    return (
      <div className="registrations">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Registrations</h1>
              <p className="lead text-center">Browse Registrations</p>
              {registrationItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Registrations.propTypes = {
  getRegistrations: PropTypes.func.isRequired,
  registration: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  registration: state.registration
});

export default connect(
  mapStateToProps,
  { getRegistrations }
)(Registrations);
