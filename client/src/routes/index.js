import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ContentWrapper from "../components/ContentWrapper";
import { routes } from "./constants";
import Issue from "../screens/Issue";
import Issues from "../screens/Issues";
import ErrorPage from "../screens/ErrorPage";

const MainRouter = () => (
  <ContentWrapper>
    <Switch>
      <Route exact path={`${routes.issues}`} component={Issues} />
      <Route exact path={`${routes.issues}/:id`} component={Issue} />
      <Route exact path={`${routes.error404}`} component={ErrorPage} />
      <Redirect from={routes.any} to={routes.issues} />
    </Switch>
  </ContentWrapper>
);

export default MainRouter;
