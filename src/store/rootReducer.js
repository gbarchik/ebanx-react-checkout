import { combineReducers } from 'redux'

import configReducer from './reducers/config'
import productsReducer from './reducers/products'
import cartReducer from './reducers/cart'
import paymentReducer from './reducers/payment'

export const makeRootReducer = () => {
    return combineReducers({
        config: configReducer,
        products: productsReducer,
        cart: cartReducer,
        payment: paymentReducer
    })
}

export default makeRootReducer