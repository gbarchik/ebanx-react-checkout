import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import GridContainer from '../GridContainer'

import {
    colors,
    globalPadding,
    headerFontFamily,
    headerFontSizes,
    headerFontWeight
} from '../../helpers/foundation'
import { calculateRem, calculateEm } from '../../helpers/helper'

const StyledThankYou = styled.div`
    padding: ${calculateEm(5 * globalPadding)} ${calculateEm(2 * globalPadding)}
    text-align: center;
    background-color: ${colors.lightGray}
`

const ThankYouTitle = styled.h2`
    position: relative;
    display: inline-block;
    padding-left: ${calculateEm(45, headerFontSizes.h2)};
    font-family: ${headerFontFamily};
    font-size: ${calculateRem(headerFontSizes.h2)};
    font-weight: ${headerFontWeight};

    &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        display: block;
        width: ${calculateEm(35, headerFontSizes.h2)};
        height: ${calculateEm(35, headerFontSizes.h2)};
        border-radius: 100%;
        background-color: ${colors.mediumGray};
        transform: translateY(-50%);
    }
`

const ThankYou = (props) => {
    const { title, message } = props.checkout

    return (
        <GridContainer>
            <StyledThankYou>
                <ThankYouTitle>{title}</ThankYouTitle>
                <p dangerouslySetInnerHTML={{ __html: message }} />
            </StyledThankYou>
        </GridContainer>
    )
}

ThankYou.propTypes = {
    checkout: PropTypes.shape({
        title: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired
    })
}

export default ThankYou