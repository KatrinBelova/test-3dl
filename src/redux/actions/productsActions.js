import {
    GET_PRODUCTS_START,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    FILTER_PRODUCTS_NEW,
    FILTER_PRODUCTS_POPULAR,
    FILTER_PRODUCTS_EXPENSIVE,
    FILTER_PRODUCTS_CHIP,
    FILTER_RESET,
    GET_COATS,
    GET_SNEAKERS,
    GET_SHIRTS,
    GET_PANTS,
} from '../types/index';
import products from '../../data/products.json';

export const getProductStart = () => {
    return {
        type: GET_PRODUCTS_START
    }
}

export const getProductSuccess = (data) => {
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload: data
    }
}

export const getProductFail = () => {
    return {
        type: GET_PRODUCTS_FAIL
    }
}

export const getProducts = () => async ( dispatch, ) => {
	dispatch(getProductStart());
	try {
        const response = {data: products, status: 200};
		if (response.status === 200) {
			dispatch(getProductSuccess(response.data));
		}
	} catch (e) {
		dispatch(getProductFail(e));
	}
};


export const getCoats = () => {
    return {
        type: GET_COATS
    }
}

export const getSneakers = () => {
    return {
        type: GET_SNEAKERS
    }
}

export const getShirts = () => {
    return {
        type: GET_SHIRTS
    }
}

export const getPants = () => {
    return {
        type: GET_PANTS
    }
}

export const getNew = () => {
    return {
        type: FILTER_PRODUCTS_NEW
    }
}

export const getChip = () => {
    return {
        type: FILTER_PRODUCTS_CHIP
    }
}

export const getExpensive = () => {
    return {
        type: FILTER_PRODUCTS_EXPENSIVE
    }
}

export const getPopular = () => {
    return {
        type: FILTER_PRODUCTS_POPULAR
    }
}

export const resetFilter = () => {
    return {
        type: FILTER_RESET
    }
}