import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

import Main from '../Main/container'

const App = ({ store }) => (
    <Provider store={store}>
        <Main/>
    </Provider>
)

App.propTypes = {
    store: PropTypes.object.isRequired
}

export default App