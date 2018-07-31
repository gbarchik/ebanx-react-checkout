import React, { Component } from 'react'
import PropTypes from 'prop-types'

import GridContainer from '../GridContainer'
import ProductsList from '../ProductsList'
import ProductRow from '../ProductRow'
import CartTotal from '../CartTotal'
import Spacer from '../Spacer'

class Cart extends Component {
    componentDidMount() {
        // Load all the products
        this.props.loadProducts();
    }

    componentDidUpdate() {
        // If there is any products in the card,
        // show the checkout form
        if (this.props.cart.products.length) {
            this.props.showForm()
        } else {
            this.props.hideForm()
        }
    }

    render() {
        const {
            products,
            addToCart,
            removeFromCart,
            cart
        } = this.props;

        return (
            <GridContainer>
                <ProductsList products={products}>
                    {products.map((product) => (
                        <ProductRow
                            key={product.id}
                            product={product}
                            cart={cart}
                            addToCart={() => addToCart(product)}
                            removeFromCart={() => removeFromCart(product)} />
                    ))}
                </ProductsList>
                <Spacer />
                <CartTotal cart={cart} />
            </GridContainer>
        )
    }
}

Cart.propTypes = {
    loadProducts: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    showForm: PropTypes.func.isRequired,
    hideForm: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    cart: PropTypes.object.isRequired
}

export default Cart