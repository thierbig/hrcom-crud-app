import React from "react";
import ReactDOM from "react-dom/client";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

/* import Roboto Font */
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./css/styles.css";

/* import routes */
import Layout from "./routes/layout";
import Home from "./routes/home";
import Events, { loader as EventsLoader } from "./routes/events";
import CreateEvent, {
  action as CreateEventAction,
} from "./routes/create-event";

import NotFound from "./404";

import { CssBaseline } from "@mui/material";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<NotFound />}>
      <Route index element={<Home />} />
      <Route path="events" element={<Events />} loader={EventsLoader} />
      <Route
        path="events/create"
        element={<CreateEvent />}
        action={CreateEventAction}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <CssBaseline />
    <RouterProvider router={router} />
  </LocalizationProvider>
);