import { connect } from 'react-redux'

import { updateStep, goToStep, getAddress } from '../../store/reducers/payment'
import { buyNow } from '../../store/reducers/checkout'

import Payment from './index'

const mapDispatchToProps = {
    updateStep,
    goToStep,
    getAddress,
    buyNow
}

const mapStateToProps = (state) => {
    const { payment } = state
    const { cart } = state.cart

    return ({
        payment,
        cart
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment)