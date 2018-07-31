import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

import Header from '../Header/container'
import Cart from '../Cart/container'
import Payment from '../Payment/container'
import Footer from '../Footer/container'

const App = ({ store }) => (
    <Provider store={store}>
        <div>
            <Header />
            <Cart />
            <Payment />
            <Footer />
        </div>
    </Provider>
)

App.propTypes = {
    store: PropTypes.object.isRequired
}

export default App