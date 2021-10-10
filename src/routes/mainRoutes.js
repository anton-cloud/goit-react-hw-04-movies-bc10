import { lazy } from "react";

export const mainRoutes = [
  {
    name: "Home",
    path: "/",
    component: lazy(() => import('../pages/HomePage' /* webpackChunkName: "Homepage" */)),
    exact: true,
  },
  {
    name: "Movies",
    path: "/movies",
    component: lazy(() => import("../pages/moviesPage/MoviesPage" /* webpackChunkName: "MoviesPage" */)),
    exact: false,
  },
];