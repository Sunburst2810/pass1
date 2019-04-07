import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import { createRegistration } from "../../actions/registrationActions";

class CreateRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eMM11: "",
      nameofleasee: "",
      mobilenoleasee: "",
      tinno: "",
      leaseeid: "",
      leaseedetails: "",
      tehsilofleasee: "",
      districtofleasee: "",
      quantitytransportqmeter: "",
      nameofmineral: "",
      loadingfrom: "",
      destination: "",
      distance: "",
      etpgeneratedon: "",
      emm11validupto: "",
      travelingduration: "",
      destinationdistrict: "",
      registrationno: "",
      typeofvehicle: "",
      nameofdriver: "",
      mobilenodriver: "",
      dlnodriver: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const registrationData = {
      eMM11: this.state.eMM11,
      nameofleasee: this.state.nameofleasee,
      mobilenoleasee: this.state.mobilenoleasee,
      tinno: this.state.tinno,
      leaseeid: this.state.leaseeid,
      leaseedetails: this.state.leaseedetails,
      tehsilofleasee: this.state.tehsilofleasee,
      districtofleasee: this.state.districtofleasee,
      quantitytransportqmeter: this.state.quantitytransportqmeter,
      nameofmineral: this.state.nameofmineral,
      loadingfrom: this.state.loadingfrom,
      destination: this.state.destination,
      distance: this.state.distance,
      etpgeneratedon: this.state.etpgeneratedon,
      emm11validupto: this.state.emm11validupto,
      travelingduration: this.state.travelingduration,
      destinationdistrict: this.state.destinationdistrict,
      registrationno: this.state.registrationno,
      typeofvehicle: this.state.typeofvehicle,
      nameofdriver: this.state.nameofdriver,
      mobilenodriver: this.state.mobilenodriver,
      dlnodriver: this.state.dlnodriver
    };

    this.props.createRegistration(registrationData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create Your Profile</h1>
              <p className="lead text-center">
                Directorate Of Geology & Mining Uttar Pradesh Minor Mineral
                Concession Rules 1963 e-Transit Pass For Transportation & Minor
                Mineral See Rule 70(1) Form MM11
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="eMM11"
                  name="eMM11"
                  value={this.state.eMM11}
                  onChange={this.onChange}
                  error={errors.eMM11}
                  info="A unique eMM11 for your profile URL. Your full name, company name, nickname"
                />
                <TextFieldGroup
                  placeholder="nameofleasee"
                  name="nameofleasee"
                  value={this.state.nameofleasee}
                  onChange={this.onChange}
                  error={errors.nameofleasee}
                  info="Could be your own nameofleasee or one you work for"
                />
                <TextFieldGroup
                  placeholder="mobilenoleasee"
                  name="mobilenoleasee"
                  value={this.state.mobilenoleasee}
                  onChange={this.onChange}
                  error={errors.mobilenoleasee}
                  info="Could be your own mobilenoleasee or a company one"
                />
                <TextFieldGroup
                  placeholder="tinno"
                  name="tinno"
                  value={this.state.tinno}
                  onChange={this.onChange}
                  error={errors.tinno}
                  info="City or city & state suggested (eg. Boston, MA)"
                />
                <TextFieldGroup
                  placeholder="leaseeid"
                  name="leaseeid"
                  value={this.state.leaseeid}
                  onChange={this.onChange}
                  error={errors.leaseeid}
                  info="Please use comma separated values"
                />
                <TextFieldGroup
                  placeholder="leaseedetails"
                  name="leaseedetails"
                  value={this.state.leaseedetails}
                  onChange={this.onChange}
                  error={errors.leaseedetails}
                  info="If you want your latest repos and a Github link, include your username"
                />
                <TextFieldGroup
                  placeholder="tehsilofleasee"
                  name="tehsilofleasee"
                  value={this.state.tehsilofleasee}
                  onChange={this.onChange}
                  error={errors.tehsilofleasee}
                  info="Tell us a little about yourself"
                />

                <TextFieldGroup
                  placeholder="districtofleasee"
                  name="districtofleasee"
                  value={this.state.districtofleasee}
                  onChange={this.onChange}
                  error={errors.districtofleasee}
                  info="Tell us a little about yourself"
                />

                <TextFieldGroup
                  placeholder="quantitytransportqmeter"
                  name="quantitytransportqmeter"
                  value={this.state.quantitytransportqmeter}
                  onChange={this.onChange}
                  error={errors.quantitytransportqmeter}
                  info="Tell us a little about yourself"
                />

                <TextFieldGroup
                  placeholder="nameofmineral"
                  name="nameofmineral"
                  value={this.state.nameofmineral}
                  onChange={this.onChange}
                  error={errors.nameofmineral}
                  info="Tell us a little about yourself"
                />

                <TextFieldGroup
                  placeholder="loadingfrom"
                  name="loadingfrom"
                  value={this.state.loadingfrom}
                  onChange={this.onChange}
                  error={errors.loadingfrom}
                  info="Tell us a little about yourself"
                />

                <TextFieldGroup
                  placeholder="destination"
                  name="destination"
                  value={this.state.destination}
                  onChange={this.onChange}
                  error={errors.destination}
                  info="Tell us a little about yourself"
                />

                <TextFieldGroup
                  placeholder="distance"
                  name="distance"
                  value={this.state.distance}
                  onChange={this.onChange}
                  error={errors.distance}
                  info="Tell us a little about yourself"
                />

                <TextFieldGroup
                  placeholder="etpgeneratedon"
                  name="etpgeneratedon"
                  value={this.state.etpgeneratedon}
                  onChange={this.onChange}
                  error={errors.etpgeneratedon}
                  info="Tell us a little about yourself"
                />

                <TextFieldGroup
                  placeholder="emm11validupto"
                  name="emm11validupto"
                  value={this.state.emm11validupto}
                  onChange={this.onChange}
                  error={errors.emm11validupto}
                  info="Tell us a little about yourself"
                />

                <TextFieldGroup
                  placeholder="travelingduration"
                  name="travelingduration"
                  value={this.state.travelingduration}
                  onChange={this.onChange}
                  error={errors.travelingduration}
                  info="Tell us a little about yourself"
                />

                <TextFieldGroup
                  placeholder="destinationdistrict"
                  name="destinationdistrict"
                  value={this.state.destinationdistrict}
                  onChange={this.onChange}
                  error={errors.destinationdistrict}
                  info="Tell us a little about yourself"
                />

                <TextFieldGroup
                  placeholder="registrationno"
                  name="registrationno"
                  value={this.state.registrationno}
                  onChange={this.onChange}
                  error={errors.registrationno}
                  info="Tell us a little about yourself"
                />

                <TextFieldGroup
                  placeholder="typeofvehicle"
                  name="typeofvehicle"
                  value={this.state.typeofvehicle}
                  onChange={this.onChange}
                  error={errors.typeofvehicle}
                  info="Tell us a little about yourself"
                />

                <TextFieldGroup
                  placeholder="nameofdriver"
                  name="nameofdriver"
                  value={this.state.nameofdriver}
                  onChange={this.onChange}
                  error={errors.nameofdriver}
                  info="Tell us a little about yourself"
                />

                <TextFieldGroup
                  placeholder="mobilenodriver"
                  name="mobilenodriver"
                  value={this.state.mobilenodriver}
                  onChange={this.onChange}
                  error={errors.mobilenodriver}
                  info="Tell us a little about yourself"
                />

                <TextFieldGroup
                  placeholder="dlnodriver"
                  name="dlnodriver"
                  value={this.state.dlnodriver}
                  onChange={this.onChange}
                  error={errors.dlnodriver}
                  info="Tell us a little about yourself"
                />

                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateRegistration.propTypes = {
  registration: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  registration: state.registration,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createRegistration }
)(withRouter(CreateRegistration));
