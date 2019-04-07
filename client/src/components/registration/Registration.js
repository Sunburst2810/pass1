import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getRegistrationByEMM11 } from "../../actions/registrationActions";
import RegistrationHeader from "./RegistrationHeader";
import Spinner from "../common/Spinner";

class Registration extends Component {
  componentDidMount() {
    if (this.props.match.params.eMM11) {
      this.props.getRegistrationByEMM11(this.props.match.params.eMM11);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.registration.registration === null &&
      this.props.registration.loading
    ) {
      this.props.history.push("/not-found");
    }
  }
  render() {
    const { registration, loading } = this.props.registration;
    let registrationContent;

    if (registration === null || loading) {
      registrationContent = <Spinner />;
    } else {
      registrationContent = (
        <div>
          <RegistrationHeader registration={registration} />
        </div>
      );
    }

    return <div>{registrationContent}</div>;
  }
}

Registration.propTypes = {
  getRegistrationByEMM11: PropTypes.func.isRequired,
  registration: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  registration: state.registration
});

export default connect(
  mapStateToProps,
  { getRegistrationByEMM11 }
)(Registration);
