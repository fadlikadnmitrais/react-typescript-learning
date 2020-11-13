import { ADD_USER } from "./userTypes";

export const addUser = (data: any) => ({
    payload: data,
    type: ADD_USER,
});