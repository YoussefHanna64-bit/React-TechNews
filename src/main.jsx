import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import storeConfig from "./Redux/store/store.js";
import { Provider } from "react-redux";
import "./i18n";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={storeConfig}>
    <App />
  </Provider>,
  // </StrictMode>,
);
