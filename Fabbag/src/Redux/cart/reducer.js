import { ADD_PRODUCTS, REMOVE_PRODUCT, UPDATE_PRODUCT } from "./actions";

function cartReducer(store=[],{type,payload}){
    switch(type){
        // case ADD_PRODUCT:
        case UPDATE_PRODUCT:
        case REMOVE_PRODUCT:
        case ADD_PRODUCTS:
            return [...payload];
        default:
            return store;
    }

}

export {cartReducer};