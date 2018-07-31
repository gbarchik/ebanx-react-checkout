import React from 'react'
import styled from 'styled-components'
import MaskedInput from 'react-text-mask'

import {
    formInputHeight,
    formInputFontSize,
    formInputTextColor,
    formInputLetterSpacing,
    formInputPlaceholderColor,
    formInputPadding,
    formInputSpace,
    formInputBackground,
    formInputBorder,
    formInputBorderFocus,
    formInputTransition
} from '../../../helpers/foundation'
import { calculateRem, calculateEm } from '../../../helpers/helper'

const StyledInput = styled.input`
    appearance: none;
    display: block;
    padding: 0 ${calculateEm(formInputPadding, formInputFontSize)};
    margin: 0 0 ${calculateEm(formInputSpace, formInputFontSize)};
    width: 100%;
    height: ${calculateRem(formInputHeight)};
    font-size: ${formInputFontSize};
    letter-spacing: ${formInputLetterSpacing};
    color: ${formInputTextColor};
    border: ${formInputBorder};
    background-color: ${formInputBackground};
    box-sizing: border-box;
    transition: ${formInputTransition};

    &:focus {
        border: ${formInputBorderFocus};
    }

    &::placeholder {
        color: ${formInputPlaceholderColor};
    }
`

export const Input = (props) => {
    const input = props.mask ? (
        <MaskedInput {...props} render={(ref, props) => (
            <StyledInput innerRef={ref} {...props} />
        )} />
    ) : (
        <StyledInput {...props} />
    )

    return input
}

export default Input