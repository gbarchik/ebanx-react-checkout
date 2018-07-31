import { connect } from 'react-redux'

import { loadProducts } from '../../store/reducers/products'
import { addToCart, removeFromCart } from '../../store/reducers/cart'
import { showForm, hideForm } from '../../store/reducers/payment'

import Cart from './index'

const mapDispatchToProps = {
    loadProducts,
    addToCart,
    removeFromCart,
    showForm,
    hideForm
}

const mapStateToProps = (state) => {
    const { products } = state.products
    const { cart } = state.cart

    return ({
        products,
        cart
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)