// Constants
export const ADDED_TO_CART = 'ADDED_TO_CART'
export const REMOVED_FROM_CART = 'REMOVED_FROM_CART'

// Actions
export const addedToCart = (product) => {
    return ({
        type: ADDED_TO_CART,
        product
    })
}

export const removedFromCart = (product) => {
    return ({
        type: REMOVED_FROM_CART,
        product
    })
}

// Dispatchers
export const addToCart = (product) => dispatch => dispatch(addedToCart(product))
export const removeFromCart = (product) => dispatch => dispatch(removedFromCart(product))

// Reducer
const initialState = { cart: { products: [], total: 0 } }
const getCartTotal = (cart) => cart.reduce((total, product) => total + product.price, 0)

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED_TO_CART:
            const productsAdded = [...state.cart.products, action.product]
            const totalAdded = getCartTotal(productsAdded)
            
            return {
                ...state,
                cart: {
                    products: productsAdded,
                    total: totalAdded
                }
            }

        case REMOVED_FROM_CART:
            const productsRemoved = state.cart.products.filter((prod) => prod.id !== action.product.id)
            const totalRemoved = getCartTotal(productsRemoved)

            return {
                ...state,
                cart: {
                    products: productsRemoved,
                    total: totalRemoved
                }
            }

        default:
            return state
    }
}

export default cartReducer