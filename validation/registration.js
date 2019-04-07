const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegistrationInput(data) {
  let errors = {};

  data.eMM11 = !isEmpty(data.eMM11) ? data.eMM11 : "";
  data.nameofleasee = !isEmpty(data.nameofleasee) ? data.nameofleasee : "";
  

  if (!Validator.isLength(data.eMM11, { min: 2, max: 17 })) {
    errors.eMM11 = "eMM11 needs to between 2 and 17 characters";
  }

  if (Validator.isEmpty(data.eMM11)) {
    errors.eMM11 = "Profile eMM11 is required";
  }

  if (Validator.isEmpty(data.nameofleasee)) {
    errors.nameofleasee = "nameofleasee field is required";
  }

  

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
