import React from 'react';
import "./App.css";
import { ThemeProvider } from "@chakra-ui/core";
import customTheme from "./theme";
import { Provider } from "react-redux";
import { ApplicationState } from "./store";
import { Store } from "redux";
import { History } from "history";
import { ConnectedRouter } from "connected-react-router";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import {Persistor} from "redux-persist/es/types";
import { PersistGate } from "redux-persist/integration/react";

interface MainProps {
  store: Store<ApplicationState>;
  persistor: Persistor;
  history: History;
}

const App: React.FC<MainProps> = ({ store, persistor, history }) => {
  return (
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
            <ThemeProvider theme={customTheme}>
                <ConnectedRouter history={history}>
                    <Router>
                        <Routes/>
                    </Router>
                </ConnectedRouter>
            </ThemeProvider>
        </PersistGate>
    </Provider>
  );
};

export default App;
