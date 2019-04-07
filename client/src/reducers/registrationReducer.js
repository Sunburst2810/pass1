import {
  GET_REGISTRATION,
  GET_REGISTRATIONS,
  REGISTRATION_LOADING,
  CLEAR_CURRENT_REGISTRATION
} from "../actions/types";

const initialState = {
  registration: null,
  registrations: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTRATION_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_REGISTRATION:
      return {
        ...state,
        registration: action.payload,
        loading: false
      };
    case GET_REGISTRATIONS:
      return {
        ...state,
        registrations: action.payload,
        loading: false
      };
    case CLEAR_CURRENT_REGISTRATION:
      return {
        ...state,
        registration: null
      };
    default:
      return state;
  }
}
