import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import { Login, Register } from "./components/Authentication";
import VenueDetails from "./components/VenueDetails";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="happy-hour-app">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/venue/:id" component={VenueDetails} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
