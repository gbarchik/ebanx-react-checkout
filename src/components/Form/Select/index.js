import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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

const StyledSelect = styled.select`
    appearance: none;
    display: block;
    padding: 0 1.5em 0 ${calculateEm(formInputPadding, formInputFontSize)};
    margin: 0 0 ${calculateEm(formInputSpace, formInputFontSize)};
    width: 100%;
    height: ${calculateRem(formInputHeight)};
    font-size: ${formInputFontSize};
    letter-spacing: ${formInputLetterSpacing};
    color: ${(props) => props.isSelectDirty ? formInputTextColor : formInputPlaceholderColor};
    border-radius: 0;
    border: ${formInputBorder};
    background: ${formInputBackground} url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='32' height='24' viewBox='0 0 32 24'><polygon points='0,0 32,0 16,24' style='fill: rgb%28138, 138, 138%29'></polygon></svg>");
    background-origin: content-box;
    background-position: right -0.8rem center;
    background-repeat: no-repeat;
    background-size: 9px 6px;
    box-sizing: border-box;
    transition: ${formInputTransition};

    &:focus {
        border: ${formInputBorderFocus};
    }
`

class Select extends Component {
    constructor(props) {
        super(props)
        this.state = { isSelectDirty: false }

        this.handleSelectChange = this.handleSelectChange.bind(this)
    }

    handleSelectChange(e) {
        this.props.onChange(e);
        this.setState({ isSelectDirty: true })
    }

    render() {
        const { props } = this

        return (
            <StyledSelect {...props} onChange={this.handleSelectChange} isSelectDirty={this.state.isSelectDirty}>
                <option value="" disabled>{props.placeholder}</option>
                {props.options && props.options.map((option) => (
                    <option key={`option-${option.val}`} value={option.val}>{option.name}</option>
                ))}
            </StyledSelect>
        )
    }
}

Select.propType = {
    placeholder: PropTypes.string,
    options: PropTypes.array.isRequired
}

export default Select