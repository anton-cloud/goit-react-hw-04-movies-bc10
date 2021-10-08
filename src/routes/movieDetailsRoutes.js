import { lazy } from "react";

export const movieDetailsRoutes = [
  {
    name: "Cast",
    path: "/cast",
    component: lazy(() => import("../components/cast/Cast" /* webpackChunkName: "Cast" */)),
    exact: false,
  },
  {
    name: "Reviews",
    path: "/reviews",
    component: lazy(() => import("../components/reviews/Reviews" /* webpackChunkName: "Reviews" */)),
    exact: false,
  },
];