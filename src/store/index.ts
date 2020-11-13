import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { History } from "history";

import { InventoryReducer } from "./inventory/reducer";
import { InventoryState } from "./inventory/types";

import { cartReducer } from "./cart/reducer";
import { cartState } from "./cart/types";
import { RouterState } from "connected-react-router";

import { userReducer } from "./modules/user";
import { productsReducer } from "./modules/product";
import userFormReducer from "./userForm/reducer";

export interface ApplicationState {
    cart: cartState;
    inventory: InventoryState;
    router: RouterState;
};

export const createRootReducer = (history: History) =>
    combineReducers({
        cart: cartReducer,
        inventory: InventoryReducer,
        user: userReducer,
        products: productsReducer,
        userForm: userFormReducer,
        router: connectRouter(history),
    });

export const rootReducer = combineReducers({
    user: userReducer,
    products: productsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

