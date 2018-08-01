import { combineReducers } from 'redux'

import configReducer from './reducers/config'
import productsReducer from './reducers/products'
import cartReducer from './reducers/cart'
import paymentReducer from './reducers/payment'
import checkoutReducer from './reducers/checkout'

export const makeRootReducer = () => {
    return combineReducers({
        config: configReducer,
        products: productsReducer,
        cart: cartReducer,
        payment: paymentReducer,
        checkout: checkoutReducer
    })
}

export default makeRootReducer