import React from "react";
import Signup from "./authentication/Signup";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./authentication/Profile";
import Login from "./authentication/Login";
import PrivateRoute from "./authentication/PrivateRoute";
import ForgotPassword from "./authentication/ForgotPassword";
import UpdateProfile from "./authentication/UpdateProfile";
import Dashboard from './google-drive/Dashboard'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          {/* Drive */}
          <PrivateRoute exact path='/' component={Dashboard} />
          {/* Profile */}
          <PrivateRoute exact path="/user" component={Profile} />
          <PrivateRoute
            exact
            path="/update-profile"
            component={UpdateProfile}
          />

          {/* Auth */}
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
