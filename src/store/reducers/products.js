import getProducts from '../../helpers/getProducts'

// Constants
export const FETCHING_PRODUCTS = 'FETCHING_PRODUCTS'
export const PRODUCTS_LOADED = 'PRODUCTS_LOADED'

// Actions
export const fetchingProducts = () => ({
    type: FETCHING_PRODUCTS,
    products: [],
    isLoading: true
})

export const productsLoaded = ({ products }) => ({
    type: PRODUCTS_LOADED,
    products,
    isLoading: false
})

// Dispatchers
export const loadProducts = () => dispatch => {
    dispatch(fetchingProducts());
    return getProducts().then(data => dispatch(productsLoaded(data)))
}

// Reducer
const initialState = { products: [], isLoading: false }
export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_PRODUCTS:
            return {
                ...state,
                isLoading: action.isLoading
            }

        case PRODUCTS_LOADED:
            return {
                ...state,
                products: action.products,
                isLoading: action.isLoading
            }

        default:
            return state
    }
}

export default productsReducer