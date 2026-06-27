import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MaingLayout from "../layouts/MaingLayout";
import Home from "../page/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: MaingLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {

        },
    ],
  },
]);
