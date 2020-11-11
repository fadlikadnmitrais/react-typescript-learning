import { Store, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import { History } from "history";
import { ApplicationState, createRootReducer } from "./store";
import persistState, { mergePersistedState } from "redux-localstorage";
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import filter from 'redux-localstorage-filter';

export default function configureStore(
    history: History,
    initialState: ApplicationState
): Store<ApplicationState> {

    // start add localstorage to redux
    const reducer = compose(
        mergePersistedState()
    )(createRootReducer(history));

    const storage = compose(
        filter('nested.key')
        // persistState(storage, 'state')
    )(adapter(window.localStorage));

    const enhancer = compose(
        applyMiddleware(routerMiddleware(history), thunk),
        persistState(storage, 'my-storage-key')
    );

    // console.log(typeof reducer);

    const store = createStore(
        reducer,
        // createRootReducer(history),
        initialState,
        enhancer
    );

    // const store = createStore(
    //     createRootReducer(history),
    //     initialState,
    //     applyMiddleware(routerMiddleware(history), thunk)
    // );


    return store;
}