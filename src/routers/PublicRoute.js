import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import LoginPage from '../components/LoginPage';

// rename component to Component to aid with rendering
export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  // ...rest (rest is just a variable name) gives us access to everything except
  // isAuthenticated and component
  ...rest
  }) => (
  <Route {...rest} component={(props) => (
    isAuthenticated ? (
      <Redirect to="/dashboard" />
    ) : (
      <Component {...props} />
    )
    )}/>
);

// helps us find out if the user is authenticated
const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
