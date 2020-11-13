import { ADD_USER } from "./userTypes";
import { UserState, UserTypes } from "./add.d";

const INITIAL_STATE: UserState = {
    data: [],
};

function userFormReducer(state = INITIAL_STATE, action: UserTypes): UserState {
    switch (action.type) {
        case ADD_USER: {
            return {
                ...state,
                data: [action.payload, ...state.data],
            };
        }
        default:
            return state;
    }
}

export default userFormReducer;