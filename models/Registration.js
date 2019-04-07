const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RegistrationSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  eMM11: {
    type: String,
    required: true,
    max: 17
  },
  nameofleasee: {
    type: String
  },
  mobilenoleasee: {
    type: String
  },
  tinno: {
    type: String
  },
  leaseeid: {
    type: String
  },
  leaseedetails: {
    type: String
  },
  tehsilofleasee: {
    type: String
  },
  districtofleasee: {
    type: String
  },

  quantitytransportqmeter: {
    type: String
  },
  nameofmineral: {
    type: String
  },

  loadingfrom: {
    type: String
  },
  destination: {
    type: String
  },

  distance: {
    type: String
  },

  etpgeneratedon: {
    type: String
  },

  emm11validupto: {
    type: String
  },

  travelingduration: {
    type: String
  },

  destinationdistrict: {
    type: String
  },

  registrationno: {
    type: String,
    max: 10
  },

  typeofvehicle: {
    type: String
  },

  nameofdriver: {
    type: String
  },

  mobilenodriver: {
    type: String
  },

  dlnodriver: {
    type: String
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Registration = mongoose.model(
  "registration",
  RegistrationSchema
);
