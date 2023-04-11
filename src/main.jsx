import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppliedJob from "./components/AppliedJob/AppliedJob";
import FirstPage from "./components/FirstPage/FirstPage";
import JobDetails from "./components/JobDetails/JobDetails";
import Blog from "./components/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "appliedJob",
        element: <AppliedJob />,
        loader: () => fetch("companyData.json"),
      },
      {
        path: "firstPage",
        element: <FirstPage />,
      },
      {
        path: "jobDetails",
        element: <JobDetails />,
        loader: () => fetch("companyData.json"),
      },
      {
        path: "blog",
        element: <Blog />,
        loader: () => fetch("question.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
