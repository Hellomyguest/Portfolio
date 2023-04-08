import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createHistoryRouter } from "atomic-router";
import { RouterProvider } from "atomic-router-react";
import { createBrowserHistory } from "history";
import { App } from "./App";
import "./shared/lib/i18n/i18n";

import { routesMap } from "./pages";

export const router = createHistoryRouter({
  routes: routesMap,
});

const history = createBrowserHistory();

router.setHistory(history);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
