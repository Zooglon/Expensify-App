import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

// rename component to Component to aid with rendering
export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  // ...rest (rest is just a variable name) gives us access to everything except
  // isAuthenticated and component
  ...rest
  }) => (
  <Route {...rest} component={(props) => (
    isAuthenticated ? (
      // if the user IS authenticated will render the component...
      <div>
        <Header />
        <Component {...props} />
      </div>
    ) : (
      // if the user is NOT authenticated will redirect to login page...
      <Redirect to="/" />
    )
    )}/>
);

// helps us find out if the user is authenticated
const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
