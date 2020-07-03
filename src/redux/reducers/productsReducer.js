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

const initialState = {
    data: [],
    filtered: null,
    loading: false
}

const productsReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case GET_PRODUCTS_START: 
            return {
                ...state,
                loading: true
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                data: action.payload,
                loading: false
            }
        case GET_PRODUCTS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_COATS:
            let dataSnapshotCoats = [...state.data];
            let coats = dataSnapshotCoats.filter(item => item?.category === 'плащи');
            return {
                filtered: [],
                data: coats,
                loading: false
            }
        case GET_SNEAKERS:
            let dataSnapshotSNEAKERS = [...state.data];
            let SNEAKERS = dataSnapshotSNEAKERS.filter(item => item?.category === 'кроссовки');
            return {
                filtered: [],
                data: SNEAKERS,
                loading: false
            }
        case GET_SHIRTS:
            let dataSnapshotSHIRTS = [...state.data];
            let SHIRTS = dataSnapshotSHIRTS.filter(item => item?.category === 'рубашки');
            return {
                filtered: [],
                data: SHIRTS,
                loading: false
            }
        case GET_PANTS:
            let dataSnapshotPANTS = [...state.data];
            let PANTS = dataSnapshotPANTS.filter(item => item?.category === 'брюки');
            return {
                filtered: [],
                data: PANTS,
                loading: false
            }
        case FILTER_PRODUCTS_NEW:
            let dataSnapshot = [...state.data];
            let newProducts = dataSnapshot.filter(item => item?.created_at);

            return {
                ...state,
                filtered: newProducts,
            }
        case FILTER_PRODUCTS_POPULAR:
            let dataSnapshotPop = [...state.data];
            let newProductsPop = dataSnapshotPop.filter(item => item?.popular === true);
            
            return {
                ...state,
                filtered: newProductsPop,
            }
        case FILTER_PRODUCTS_CHIP:
            let dataSnapshotChip = [...state.data];
            let newProducts1Chip = dataSnapshotChip.sort((a, b) => a?.price?.sum - b?.price?.sum)
            return {
                ...state,
                filtered: newProducts1Chip,
            }
        case FILTER_PRODUCTS_EXPENSIVE:
            let dataSnapshotExp = [...state.data];
            let newProductsExp = dataSnapshotExp.sort((a, b) => b?.price?.sum - a?.price?.sum)
            return {
                ...state,
                filtered: newProductsExp,
            }
        case FILTER_RESET:
            return {
                ...state,
                filtered: null
            }
        default: 
            return {
                ...state
            }
    }
}

export default productsReducer;