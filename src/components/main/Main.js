import { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// import NotFoundPage from "../../pages/NotFoundPage";

import { mainRoutes } from "../../routes/mainRoutes";

const Main = () => {
  return (
    <>
      <Suspense fallback={<h2>Loading ...</h2>}>
        <Switch>
          <Route
            path={`${mainRoutes[1].path}/:movieId`}
            component={lazy(() =>
              import(
                "../../pages/movieDetailsPage/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */
              )
            )}
          />
          {mainRoutes.map(({ path, exact, component }) => (
            <Route path={path} exact={exact} component={component} key={path} />
          ))}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
};

export default Main;

{
  /* <Route component={NotFoundPage} /> */
}
