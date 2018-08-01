import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
    buttonFontFamily,
    buttonFontWeight,
    buttonFontSize,
    buttonTextColor,
    buttonPadding,
    buttonBackgroundColor,
    buttonHoverBackgroundColor,
    buttonDisabledBackgroundColor
} from '../../../helpers/foundation'
import { calculateRem, calculateEm } from '../../../helpers/helper'

const Button = styled.button`
    display: block;
    width: 100%;
    margin: 0;
    padding: ${calculateEm(buttonPadding, buttonFontSize)};
    font: ${buttonFontWeight} ${calculateRem(buttonFontSize)} ${buttonFontFamily};
    text-align: center;
    color: ${buttonTextColor};
    vertical-align: middle;
    border: none;
    background-color: ${buttonBackgroundColor};
    transition: background-color 0.25s;
    cursor: pointer;

    &:hover {
        background-color: ${buttonHoverBackgroundColor};
    }

    &[disabled] {
        opacity: 0.25;
        background-color: ${buttonDisabledBackgroundColor};
        cursor: not-allowed;
    }
`

Button.propTypes = {
    children: PropTypes.node.isRequired
}

export default Button