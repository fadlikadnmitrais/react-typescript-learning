import { typedAction } from "../helpers";

type UserState = {
    username: string | null;
};

const initialState: UserState = { username: null };

// Action
export const login = (username: string) => {
    // type: 'user/LOGIN',
    // payload: username,
    return typedAction('user/LOGIN', username)
};

export const logout = () => {
    // type: 'user/LOGOUT'
    return typedAction('user/LOGOUT')
};

// Reducer
type UserAction = ReturnType<typeof login | typeof logout>;

export function userReducer (
    state = initialState,
    action: UserAction
) : UserState {
    switch (action.type) {
        case "user/LOGIN":
            return { username: action.payload };
        case "user/LOGOUT":
            return { username: null };
        default:
            return state;
    }
}