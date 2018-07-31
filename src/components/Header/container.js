import { connect } from 'react-redux'

import Header from './index'

const mapStateToProps = (state) => ({
    config: state.config
})

export default connect(mapStateToProps)(Header)