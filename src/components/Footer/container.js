import { connect } from 'react-redux'

import Footer from './index'

const mapStateToProps = (state) => ({
    config: state.config
})

export default connect(mapStateToProps)(Footer)