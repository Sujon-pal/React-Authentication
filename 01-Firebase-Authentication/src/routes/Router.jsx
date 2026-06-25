import React from "react";
import { createBrowserRouter } from "react-router";
import MaingLayout from "../layouts/MaingLayout";
import Home from "../page/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: MaingLayout,
    children: [
        {
            path: true,
            Component: Home
        },
        {

        },
    ],
  },
]);
