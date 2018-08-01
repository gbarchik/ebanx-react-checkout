import { connect } from 'react-redux'

import Header from './index'

const mapStateToProps = (state) => {
    const { config, checkout } = state

    return ({
        config,
        checkout
    })
}

export default connect(mapStateToProps)(Header)