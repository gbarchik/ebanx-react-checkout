import { connect } from 'react-redux'

import { updateStep, goToStep } from '../../store/reducers/payment'

import Payment from './index'

const mapDispatchToProps = {
    updateStep,
    goToStep
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