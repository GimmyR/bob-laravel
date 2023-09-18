import { createStore } from "redux";

const initialState = {
    user: null
};

export const NULLIFY_USER = "nullify user";

export const UPDATE_USER = "update user";

const userReducer = function(state, action) {
    switch(action.type) {
        case NULLIFY_USER:
            return {
                ...state,
                user: null
            };

        case UPDATE_USER:
            return {
                ...state,
                user: action.payload
            };

        default:
            return state;
    }
};

export const store = createStore(userReducer, initialState);