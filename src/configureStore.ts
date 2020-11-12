import { Store, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import { History } from "history";
import { ApplicationState, createRootReducer } from "./store";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {Persistor} from "redux-persist/es/types";

const persistConfig = {
    key: 'root',
    storage,
};

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

export default function configureStore(
    history: History,
    initialState: ApplicationState
): { store: Store<ApplicationState>, persistor: Persistor } {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


    /**
     * With Persisted Redux
     */
    const persistedReducer = persistReducer(persistConfig, createRootReducer(history));
    const store = createStore(
        persistedReducer,
        initialState,
        composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
    );

    const persistor = persistStore(store);

    /**
     * Without persisted Redux
    */
    /*const store = createStore(
        createRootReducer(history),
        initialState,
        applyMiddleware(routerMiddleware(history), thunk)
    );*/
    return {store, persistor };
}