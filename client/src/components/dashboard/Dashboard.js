import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getCurrentRegistration,
  deleteAccount
} from "../../actions/registrationActions";
import Spinner from "../common/Spinner";
import RegistrationActions from "./RegistrationActions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentRegistration();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { registration, loading } = this.props.registration;

    let dashboardContent;

    if (registration === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has registration data
      if (Object.keys(registration).length > 0) {
        dashboardContent = (
          <div>
            <p className="lead text-muted">
              Welcome{" "}
              <Link to={`/registration/${registration.eMM11}`}>
                {user.name}
              </Link>
            </p>
            <RegistrationActions />

            <div style={{ marginBottom: "60px" }} />
            <button
              onClick={this.onDeleteClick.bind(this)}
              className="btn btn-danger"
            >
              Delete My Account
            </button>
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <p className="lead text-muted">Welcome {user.name}</p>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to="/create-registration" className="btn btn-lg btn-info">
              Create Registration
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentRegistration: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  registration: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  registration: state.registration,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentRegistration, deleteAccount }
)(Dashboard);
