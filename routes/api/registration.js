const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Validation
const validateRegistrationInput = require("../../validation/registration");

// Load Registration Model
const Registration = require("../../models/Registration");
// Load User Model
const User = require("../../models/User");

// @route   GET api/registration/test
// @desc    Tests registration route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Registration Works" }));

// @route   GET api/registration
// @desc    Get current users registration
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Registration.findOne({ user: req.user.id })
      .populate("user", ["name", "avatar"])
      .then(registration => {
        if (!registration) {
          errors.noregistration = "There is no Registraion for this user";
          return res.status(404).json(errors);
        }
        res.json(registration);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route   GET api/registration/all
// @desc    Get all registrations
// @access  Public
router.get("/all", (req, res) => {
  const errors = {};

  Registration.find()
    .populate("user", ["name", "avatar"])
    .then(registrations => {
      if (!registrations) {
        errors.noregistration = "There are no registration";
        return res.status(404).json(errors);
      }

      res.json(registrations);
    })
    .catch(err =>
      res.status(404).json({ registration: "There are no registrations" })
    );
});

// @route   GET api/registration/eMM11/:eMM11
// @desc    Get registration by eMM11
// @access  Public

router.get("/eMM11/:eMM11", (req, res) => {
  const errors = {};

  Registration.findOne({ eMM11: req.params.eMM11 })
    .then(registration => {
      if (!registration) {
        errors.noregistration = "There is no registration for this user";
        res.status(404).json(errors);
      }

      res.json(registration);
    })
    .catch(err => res.status(404).json(err));
});

// @route   GET api/registration/user/:user_id
// @desc    Get registration by user ID
// @access  Public

router.get("/user/:user_id", (req, res) => {
  const errors = {};

  Registration.findOne({ user: req.params.user_id })
    .populate("user", ["name", "avatar"])
    .then(registration => {
      if (!registration) {
        errors.noregistration = "There is no registration for this user";
        res.status(404).json(errors);
      }

      res.json(registration);
    })
    .catch(err =>
      res
        .status(404)
        .json({ registration: "There is no registration for this user" })
    );
});

// @route   POST api/registration
// @desc    Create or edit user registration
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateRegistrationInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    // Get fields
    const registrationFields = {};
    registrationFields.user = req.user.id;
    if (req.body.eMM11) registrationFields.eMM11 = req.body.eMM11;
    if (req.body.nameofleasee)
      registrationFields.nameofleasee = req.body.nameofleasee;
    if (req.body.mobilenoleasee)
      registrationFields.mobilenoleasee = req.body.mobilenoleasee;
    if (req.body.tinno) registrationFields.tinno = req.body.tinno;
    if (req.body.leaseeid) registrationFields.leaseeid = req.body.leaseeid;
    if (req.body.leaseedetails)
      registrationFields.leaseedetails = req.body.leaseedetails;
    if (req.body.tehsilofleasee)
      registrationFields.tehsilofleasee = req.body.tehsilofleasee;
    if (req.body.districtofleasee)
      registrationFields.districtofleasee = req.body.districtofleasee;
    if (req.body.quantitytransportqmeter)
      registrationFields.quantitytransportqmeter =
        req.body.quantitytransportqmeter;
    if (req.body.nameofmineral)
      registrationFields.nameofmineral = req.body.nameofmineral;
    if (req.body.loadingfrom)
      registrationFields.loadingfrom = req.body.loadingfrom;
    if (req.body.destination)
      registrationFields.destination = req.body.destination;
    if (req.body.distance) registrationFields.distance = req.body.distance;
    if (req.body.etpgeneratedon)
      registrationFields.etpgeneratedon = req.body.etpgeneratedon;
    if (req.body.emm11validupto)
      registrationFields.emm11validupto = req.body.emm11validupto;
    if (req.body.travelingduration)
      registrationFields.travelingduration = req.body.travelingduration;
    if (req.body.destinationdistrict)
      registrationFields.destinationdistrict = req.body.destinationdistrict;
    if (req.body.registrationno)
      registrationFields.registrationno = req.body.registrationno;
    if (req.body.typeofvehicle)
      registrationFields.typeofvehicle = req.body.typeofvehicle;
    if (req.body.nameofdriver)
      registrationFields.nameofdriver = req.body.nameofdriver;
    if (req.body.mobilenodriver)
      registrationFields.mobilenodriver = req.body.mobilenodriver;
    if (req.body.dlnodriver)
      registrationFields.dlnodriver = req.body.dlnodriver;

    Registration.findOne({ user: req.user.id }).then(registration => {
      if (registration) {
        // Update
        Registration.findOneAndUpdate(
          { user: req.user.id },
          { $set: registrationFields },
          { new: true }
        ).then(registration => res.json(registration));
      } else {
        // Create

        // Check if eMM11 exists
        Registration.findOne({ eMM11: registrationFields.eMM11 }).then(
          registration => {
            if (registration) {
              errors.eMM11 = "That eMM11 already exists";
              res.status(400).json(errors);
            }

            // Save registration
            new Registration(registrationFields)
              .save()
              .then(registration => res.json(registration));
          }
        );
      }
    });
  }
);

// @route   DELETE api/registration
// @desc    Delete user and registraion
// @access  Private
router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Registration.findOneAndRemove({ user: req.user.id }).then(() => {
      User.findOneAndRemove({ _id: req.user.id }).then(() =>
        res.json({ success: true })
      );
    });
  }
);

module.exports = router;
