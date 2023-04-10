import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppliedJob from "./components/AppliedJob/AppliedJob";
import FirstPage from "./components/FirstPage/FirstPage";
import JobDetails from "./components/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "appliedJob",
        element: <AppliedJob />,
      },
      {
        path: "firstPage",
        element: <FirstPage />,
      },
      {
        path: "jobDetails",
        element: <JobDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
