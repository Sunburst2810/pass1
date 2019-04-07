import axios from "axios";

import {
  GET_REGISTRATION,
  GET_REGISTRATIONS,
  REGISTRATION_LOADING,
  CLEAR_CURRENT_REGISTRATION,
  GET_ERRORS,
  SET_CURRENT_USER
} from "./types";

// Get current REGISTRATION
export const getCurrentRegistration = () => dispatch => {
  dispatch(setRegistrationLoading());
  axios
    .get("/api/registration")
    .then(res =>
      dispatch({
        type: GET_REGISTRATION,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_REGISTRATION,
        payload: {}
      })
    );
};

// Get Registration by eMM11
export const getRegistrationByEMM11 = eMM11 => dispatch => {
  dispatch(setRegistrationLoading());
  axios
    .get(`/api/registration/eMM11/${eMM11}`)
    .then(res =>
      dispatch({
        type: GET_REGISTRATION,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_REGISTRATION,
        payload: null
      })
    );
};

// Create Registration
export const createRegistration = (registrationData, history) => dispatch => {
  axios
    .post("/api/registration", registrationData)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get all registrations
export const getRegistrations = () => dispatch => {
  dispatch(setRegistrationLoading());
  axios
    .get("/api/registration/all")
    .then(res =>
      dispatch({
        type: GET_REGISTRATIONS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_REGISTRATIONS,
        payload: null
      })
    );
};

// Delete account & REGISTRATION
export const deleteAccount = () => dispatch => {
  if (window.confirm("Are you sure? This can NOT be undone!")) {
    axios
      .delete("/api/registration")
      .then(res =>
        dispatch({
          type: SET_CURRENT_USER,
          payload: {}
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
};

// Registration loading
export const setRegistrationLoading = () => {
  return {
    type: REGISTRATION_LOADING
  };
};

// Clear registration
export const clearCurrentRegistration = () => {
  return {
    type: CLEAR_CURRENT_REGISTRATION
  };
};
