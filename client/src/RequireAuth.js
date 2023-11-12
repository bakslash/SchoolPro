import React from "react";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

function RequireAuth({ children, loggedIn }) {
  const location = useLocation();
  

  return loggedIn  ? (
    children
  ) : (
    <Navigate to="/" replace state={{ path: location.pathname }} />
  );
}
RequireAuth.propTypes = {
  children: PropTypes.node.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};
export default RequireAuth;
