import React from 'react'

import Header from '../Header/container'
import Cart from '../Cart/container'
import Payment from '../Payment/container'
import Footer from '../Footer/container'
import ThankYou from '../ThankYou/container'

const Main = (props) => {
    const { bought } = props.checkout

    return (
        <div>
            <Header />
            {bought ? (
                <ThankYou />
            ) : (
                <div>
                    <Cart />
                    <Payment />
                </div>
            )}
            <Footer />
        </div>
    )

}

export default Main