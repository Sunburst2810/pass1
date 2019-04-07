import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

class RegistrationItem extends Component {
  render() {
    const { registration } = this.props;

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-2">
            <img
              src={registration.user.avatar}
              alt=""
              className="rounded-circle"
            />
          </div>
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{registration.user.name}</h3>
            <p>
              {registration.eMM11}{" "}
              {isEmpty(registration.nameofleasee) ? null : (
                <span>at {registration.nameofleasee}</span>
              )}
            </p>
            <p>
              {isEmpty(registration.leaseeid) ? null : (
                <span>{registration.leaseeid}</span>
              )}
            </p>
            <Link
              to={`/registration/${registration.eMM11}`}
              className="btn btn-info"
            >
              View Registration
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

RegistrationItem.propTypes = {
  registration: PropTypes.object.isRequired
};

export default RegistrationItem;
