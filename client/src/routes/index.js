import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ContentWrapper from "../components/ContentWrapper";

import { routes } from "./constants";
import Issue from "../screens/Issue";
import Issues from "../screens/Issues";

const MainRouter = () => (
  <ContentWrapper>
    <Switch>
      <Route exact path={`${routes.issues}`} component={Issues} />
      <Route exact path={`${routes.issues}/:id`} component={Issue} />
      <Redirect from={routes.any} to={routes.issues} />
    </Switch>
  </ContentWrapper>
);

export default MainRouter;
