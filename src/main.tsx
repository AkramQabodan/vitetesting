import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux/es/exports";
import App from "./App";
import AxiosWrapper from "./config/interceptor";
import "./index.css";
import store from "./state/state";



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AxiosWrapper>
        <App/>
      </AxiosWrapper>
    </Provider>
  </React.StrictMode>
);
