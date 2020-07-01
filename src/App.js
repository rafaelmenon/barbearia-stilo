import React, { memo } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Router } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import "./config/ReactotronConfig";

import history from "./services/history";
import { store, persistor } from "./store";

import Routes from "./routes";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <SnackbarProvider
            maxSnack={5}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <Routes />
          </SnackbarProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default memo(App);
