import React from "react";
import { Link } from "react-router-dom";

const RegistrationActions = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="/edit-registration" className="btn btn-light">
        <i className="fas fa-user-circle text-info mr-1" /> Edit Registration
      </Link>
    </div>
  );
};

export default RegistrationActions;
