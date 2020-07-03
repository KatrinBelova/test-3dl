import {
    IS_OPEN_CART,
    ADD_TO_CART,
    // REMOVE_FROM_CART,
} from '../types/index';


export const handleCart = (isOpen) => {
    return {
        type: IS_OPEN_CART,
        payload: isOpen
    }
}

export const addToCart = (data) => {
    return {
        type: ADD_TO_CART,
        payload: data
    }
}

export const removeToCart = (id) => {
    return {
        type: ADD_TO_CART,
        payload: id
    }
}