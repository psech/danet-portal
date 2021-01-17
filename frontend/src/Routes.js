import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Profile from "./views/Profile";
import SubscriptionNew from "./views/SubscriptionNew";
import SubscriptionUpdate from "./views/SubscriptionUpdate";
import NotFound from "./views/NotFound";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/profile" component={Profile} />
    <Route path="/subscription-new" component={SubscriptionNew} />
    <Route path="/subscription-update" component={SubscriptionUpdate} />
    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
);
export default Routes;
