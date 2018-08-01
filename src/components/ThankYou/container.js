import { connect } from 'react-redux'

import ThankYou from './index'

const mapStateToProps = (state) => {
    const { checkout } = state

    return ({
        checkout
    })
}

export default connect(mapStateToProps)(ThankYou)