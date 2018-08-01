import { connect } from 'react-redux'

import Main from './index'

const mapStateToProps = (state) => {
    const { checkout } = state

    return ({
        checkout
    })
}

export default connect(mapStateToProps)(Main)