import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
    globalMargin,
    headerFontFamily,
    headerFontSizes,
    headerFontWeight
} from '../../helpers/foundation'
import { calculateRem, currencyFormatBR } from '../../helpers/helper'

const TotalContainer = styled.div`
    display: flex;
    margin-bottom: ${calculateRem(2 * globalMargin)};
    justify-content: space-between
`

const Total = styled.span`
    display: inline-block;
    font-family: ${headerFontFamily};
    font-size: ${calculateRem(headerFontSizes.h1)};
    font-weight: ${headerFontWeight};
`

const CartTotal = ({ cart }) =>
    <TotalContainer>
        <Total>TOTAL</Total>
        <Total>{currencyFormatBR(cart.total)}</Total>
    </TotalContainer>

CartTotal.propTypes = {
    cart: PropTypes.shape({
        total: PropTypes.number.isRequired
    })
}

export default CartTotal