import { StoreProvider } from "easy-peasy";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { mainStore } from "./easy-store/easy.store";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={mainStore}>
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
