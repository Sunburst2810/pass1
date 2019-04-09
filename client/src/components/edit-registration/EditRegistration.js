import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import {
  createRegistration,
  getCurrentRegistration
} from "../../actions/registrationActions";
import isEmpty from "../../validation/is-empty";

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

  componentDidMount() {
    this.props.getCurrentRegistration();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.registration.registration) {
      const registration = nextProps.registration.registration;

      // If profile field doesnt exist, make empty string
      registration.eMM11 = !isEmpty(registration.eMM11)
        ? registration.eMM11
        : "";
      registration.nameofleasee = !isEmpty(registration.nameofleasee)
        ? registration.nameofleasee
        : "";
      registration.mobilenoleasee = !isEmpty(registration.mobilenoleasee)
        ? registration.mobilenoleasee
        : "";
      registration.tinno = !isEmpty(registration.tinno)
        ? registration.tinno
        : "";
      registration.leaseeid = !isEmpty(registration.leaseeid)
        ? registration.leaseeid
        : "";
      registration.leaseedetails = !isEmpty(registration.leaseedetails)
        ? registration.leaseedetails
        : "";
      registration.tehsilofleasee = !isEmpty(registration.tehsilofleasee)
        ? registration.tehsilofleasee
        : "";
      registration.quantitytransportqmeter = !isEmpty(
        registration.quantitytransportqmeter
      )
        ? registration.quantitytransportqmeter
        : "";
      registration.nameofmineral = !isEmpty(registration.nameofmineral)
        ? registration.nameofmineral
        : "";
      registration.loadingfrom = !isEmpty(registration.loadingfrom)
        ? registration.loadingfrom
        : "";
      registration.destination = !isEmpty(registration.destination)
        ? registration.destination
        : "";
      registration.distance = !isEmpty(registration.distance)
        ? registration.distance
        : "";
      registration.etpgeneratedon = !isEmpty(registration.etpgeneratedon)
        ? registration.etpgeneratedon
        : "";
      registration.emm11validupto = !isEmpty(registration.emm11validupto)
        ? registration.emm11validupto
        : "";
      registration.travelingduration = !isEmpty(registration.travelingduration)
        ? registration.travelingduration
        : "";
      registration.destinationdistrict = !isEmpty(
        registration.destinationdistrict
      )
        ? registration.destinationdistrict
        : "";
      registration.registrationno = !isEmpty(registration.registrationno)
        ? registration.registrationno
        : "";
      registration.typeofvehicle = !isEmpty(registration.typeofvehicle)
        ? registration.typeofvehicle
        : "";
      registration.nameofdriver = !isEmpty(registration.nameofdriver)
        ? registration.nameofdriver
        : "";
      registration.mobilenodriver = !isEmpty(registration.mobilenodriver)
        ? registration.mobilenodriver
        : "";
      registration.dlnodriver = !isEmpty(registration.dlnodriver)
        ? registration.dlnodriver
        : "";

      // Set component fields state
      this.setState({
        eMM11: registration.eMM11,
        nameofleasee: registration.nameofleasee,
        mobilenoleasee: registration.mobilenoleasee,
        tinno: registration.tinno,
        leaseeid: registration.leaseeid,
        leaseedetails: registration.leaseedetails,
        tehsilofleasee: registration.tehsilofleasee,
        districtofleasee: registration.districtofleasee,
        quantitytransportqmeter: registration.quantitytransportqmeter,
        nameofmineral: registration.nameofmineral,
        loadingfrom: registration.loadingfrom,
        destination: registration.destination,
        distance: registration.distance,
        etpgeneratedon: registration.etpgeneratedon,
        emm11validupto: registration.emm11validupto,
        travelingduration: registration.travelingduration,
        destinationdistrict: registration.destinationdistrict,
        registrationno: registration.registrationno,
        typeofvehicle: registration.typeofvehicle,
        nameofdriver: registration.nameofdriver,
        mobilenodriver: registration.mobilenodriver,
        dlnodriver: registration.dlnodriver
      });
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
              <h1 className="display-4 text-center">Edit Mining</h1>
              <p className="lead text-center">
                Directorate Of Geology & Mining Uttar Pradesh Minor Mineral
                Concession Rules 1963 e-Transit Pass For Transportation &
                Minor Mineral See Rule 70(1) Form MM11
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder=" * eMM11"
                  name="eMM11"
                  value={this.state.eMM11}
                  onChange={this.onChange}
                  error={errors.eMM11}
                  info="A unique eMM11 for your Mining."
                />
                <TextFieldGroup
                  placeholder="Name of Lessee"
                  name="nameofleasee"
                  value={this.state.nameofleasee}
                  onChange={this.onChange}
                  error={errors.nameofleasee}
                  info="Name of Lesee"
                />
                <TextFieldGroup
                  placeholder="Mobile No. of Lessee"
                  name="mobilenoleasee"
                  value={this.state.mobilenoleasee}
                  onChange={this.onChange}
                  error={errors.mobilenoleasee}
                  info="Mobile No. of Lessee"
                />
                <TextFieldGroup
                  placeholder="Tin No."
                  name="tinno"
                  value={this.state.tinno}
                  onChange={this.onChange}
                  error={errors.tinno}
                  info="Tin No."
                />
                <TextFieldGroup
                  placeholder="Lesee ID"
                  name="leaseeid"
                  value={this.state.leaseeid}
                  onChange={this.onChange}
                  error={errors.leaseeid}
                  info="Lesee ID"
                />
                <TextFieldGroup
                  placeholder="Lessee Details"
                  name="leaseedetails"
                  value={this.state.leaseedetails}
                  onChange={this.onChange}
                  error={errors.leaseedetails}
                  info="Lessee Details"
                />
                <TextFieldGroup
                  placeholder="Tehsil Of Lessee"
                  name="tehsilofleasee"
                  value={this.state.tehsilofleasee}
                  onChange={this.onChange}
                  error={errors.tehsilofleasee}
                  info="Tehsil Of Lessee"
                />

                <TextFieldGroup
                  placeholder="District of Lessee"
                  name="districtofleasee"
                  value={this.state.districtofleasee}
                  onChange={this.onChange}
                  error={errors.districtofleasee}
                  info="District of Lessee"
                />

                <TextFieldGroup
                  placeholder="Quantity Transport Q. Meter"
                  name="quantitytransportqmeter"
                  value={this.state.quantitytransportqmeter}
                  onChange={this.onChange}
                  error={errors.quantitytransportqmeter}
                  info="Quantity Transport Q. Meter"
                />

                <TextFieldGroup
                  placeholder="Name of Mineral"
                  name="nameofmineral"
                  value={this.state.nameofmineral}
                  onChange={this.onChange}
                  error={errors.nameofmineral}
                  info="Name of Mineral"
                />

                <TextFieldGroup
                  placeholder="Loading From"
                  name="loadingfrom"
                  value={this.state.loadingfrom}
                  onChange={this.onChange}
                  error={errors.loadingfrom}
                  info="Loading From"
                />

                <TextFieldGroup
                  placeholder="Destination"
                  name="destination"
                  value={this.state.destination}
                  onChange={this.onChange}
                  error={errors.destination}
                  info="Destination"
                />

                <TextFieldGroup
                  placeholder="Distance KM"
                  name="distance"
                  value={this.state.distance}
                  onChange={this.onChange}
                  error={errors.distance}
                  info="Distance KM"
                />

                <TextFieldGroup
                  placeholder="Etp Generatedon"
                  name="etpgeneratedon"
                  value={this.state.etpgeneratedon}
                  onChange={this.onChange}
                  error={errors.etpgeneratedon}
                  info="Etp Generatedon"
                />

                <TextFieldGroup
                  placeholder="eMM11 Valid Upto"
                  name="emm11validupto"
                  value={this.state.emm11validupto}
                  onChange={this.onChange}
                  error={errors.emm11validupto}
                  info="eMM11 Valid Upto"
                />

                <TextFieldGroup
                  placeholder="Traveling Duration (Hr)"
                  name="travelingduration"
                  value={this.state.travelingduration}
                  onChange={this.onChange}
                  error={errors.travelingduration}
                  info="Traveling Duration (Hr)"
                />

                <TextFieldGroup
                  placeholder="Destination District"
                  name="destinationdistrict"
                  value={this.state.destinationdistrict}
                  onChange={this.onChange}
                  error={errors.destinationdistrict}
                  info="Destination District"
                />

                <TextFieldGroup
                  placeholder="Registration No"
                  name="registrationno"
                  value={this.state.registrationno}
                  onChange={this.onChange}
                  error={errors.registrationno}
                  info="Registration No"
                />

                <TextFieldGroup
                  placeholder="Type of Vehicle"
                  name="typeofvehicle"
                  value={this.state.typeofvehicle}
                  onChange={this.onChange}
                  error={errors.typeofvehicle}
                  info="Type of Vehicle"
                />

                <TextFieldGroup
                  placeholder="Name Of Driver"
                  name="nameofdriver"
                  value={this.state.nameofdriver}
                  onChange={this.onChange}
                  error={errors.nameofdriver}
                  info="Name Of Driver"
                />

                <TextFieldGroup
                  placeholder="Mobile No Driver"
                  name="mobilenodriver"
                  value={this.state.mobilenodriver}
                  onChange={this.onChange}
                  error={errors.mobilenodriver}
                  info="Mobile No Driver"
                />

                <TextFieldGroup
                  placeholder="DL No Driver"
                  name="dlnodriver"
                  value={this.state.dlnodriver}
                  onChange={this.onChange}
                  error={errors.dlnodriver}
                  info="DL No Driver"
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
  createRegistration: PropTypes.func.isRequired,
  getCurrentRegistration: PropTypes.func.isRequired,
  registration: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  registration: state.registration,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createRegistration, getCurrentRegistration }
)(withRouter(CreateRegistration));
