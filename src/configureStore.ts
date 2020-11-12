import { Store, createStore, applyMiddleware } from "redux";
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

export default function configureStore(
    history: History,
    initialState: ApplicationState
): { store: Store<ApplicationState>, persistor: Persistor } {
    /**
     * With Persisted Redux
     */
    const persistedReducer = persistReducer(persistConfig, createRootReducer(history));
    const store = createStore(
        persistedReducer,
        initialState,
        applyMiddleware(routerMiddleware(history), thunk)
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