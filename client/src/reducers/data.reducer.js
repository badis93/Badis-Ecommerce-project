import {GET_PRODUCT} from "../actions";

export const dataReducer = (state = '', action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return state = action.payload;
       
        default:
            return state;
    }
}