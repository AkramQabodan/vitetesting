import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux/es/exports";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AxiosWrapper from "./config/interceptor";
import "./index.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import store from "./state/state";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        element: <HomePage />,
      },
      {
        index: true,
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AxiosWrapper>
        <RouterProvider router={router} />
      </AxiosWrapper>
    </Provider>
  </React.StrictMode>
);
