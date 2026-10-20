import React, { PropsWithChildren } from 'react';

// Libraries
import {
  Link,
  LinkProps,
  NavLink,
  NavLinkProps,
  Navigate,
  NavigateProps,
  Outlet,
  PathMatch,
  Route,
  RouterProvider,
  Routes,
  ScrollRestoration,
  ScrollRestorationProps,
  createBrowserRouter,
  createRoutesFromElements,
  isRouteErrorResponse,
  redirect,
  useLocation,
  useMatch,
  useNavigate,
  useParams,
  useRouteError,
  useRoutes,
  useSearchParams,
} from 'react-router-dom';

const Router: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
  const router = createBrowserRouter(createRoutesFromElements(children));

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export {
  Link,
  NavLink,
  Navigate,
  Outlet,
  Route,
  Routes,
  ScrollRestoration,
  isRouteErrorResponse,
  redirect,
  useLocation,
  useMatch,
  useNavigate,
  useParams,
  useRouteError,
  useRoutes,
  useSearchParams,
  Router,
  type LinkProps,
  type NavLinkProps,
  type NavigateProps,
  type PathMatch,
  type ScrollRestorationProps,
};
