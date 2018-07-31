import React from 'react'
import styled from 'styled-components'

import {
    colors,
    globalPadding,
    globalMargin,
    headerFontFamily,
    headerFontSizes,
    headerFontWeight
} from '../../helpers/foundation'
import { calculateRem, calculateEm } from '../../helpers/helper'

const StepContainer = styled.section`
    padding: ${calculateRem(2 * globalPadding)} ${calculateRem(3 * globalPadding)};
    margin-bottom: ${calculateRem(2 * globalMargin)};
    background-color: ${colors.lightGray};

    &:last-child {
        margin-bottom: 0;
    }
`

const StepNumber = styled.span`
    display: inline-block;
    margin-right: ${calculateEm((globalMargin / 2))};
    width: ${calculateRem(35)};
    height: ${calculateRem(35)};
    font-weight: bold;
    line-height: ${calculateRem(35)};
    text-align: center;
    border-radius: 100%;
    border: 2px solid ${(props) => props.contentVisible ? colors.mediumGray : colors.black };
    background-color: ${(props) => props.contentVisible ? colors.mediumGray : 'transparent'};
`

const StepTitle = styled.h2`
    display: inline;
    font-family: ${headerFontFamily};
    font-size: ${calculateRem(headerFontSizes.h2)};
    font-weight: ${headerFontWeight};
    line-height: ${calculateRem(35)};
`

const StepContent = styled.div`
    display: ${(props) => props.contentVisible ? 'block' : 'none'};
    padding-top: ${calculateRem(2 * globalPadding)};
`

const PaymentStep = ({
    title,
    stepNumber,
    contentVisible,
    children
}) =>
    <StepContainer>
        <header>
            <StepNumber contentVisible={contentVisible}>{stepNumber}</StepNumber>
            <StepTitle>{title}</StepTitle>
        </header>
        <StepContent contentVisible={contentVisible}>
            {children}
        </StepContent>
    </StepContainer>

export default PaymentStep