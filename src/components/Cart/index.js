import React, { Component } from 'react'
import PropTypes from 'prop-types'

import GridContainer from '../GridContainer'
import ProductsList from '../ProductsList'
import ProductRow from '../ProductRow'
import CartTotal from '../CartTotal'
import Spacer from '../Spacer'

class Cart extends Component {
    componentDidMount() {
        this.props.loadProducts();
    }

    componentDidUpdate() {
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
    cart: PropTypes.shape({
        products: PropTypes.array.isRequired,
        total: PropTypes.number.isRequired
    })
}

export default Cart