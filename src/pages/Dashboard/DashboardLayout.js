import { Switch, Route } from "react-router-dom";

function DashboardLayout({ ROUTES }) {
  return (
    <Switch>
      {ROUTES.map(({ Component, href, exact }) => {
        return (
          <Route path={href} exact={exact} key={href}>
            <Component />
          </Route>
        );
      })}
    </Switch>
  );
}

export default DashboardLayout;
