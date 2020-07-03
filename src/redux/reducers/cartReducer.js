import {
    IS_OPEN_CART,
    ADD_TO_CART,
    // REMOVE_FROM_CART,
} from '../types/index';

const initialState = {
    isOpen: false,
    data: [],
    loading: false
}

const cartReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case IS_OPEN_CART:
            return {
                ...state,
                isOpen: action.payload
            }
        case ADD_TO_CART:
            return {
                ...state,
                data: state.data.push(action.payload)
            }
        default: 
            return {
                ...state
            }
    }
}

export default cartReducer;