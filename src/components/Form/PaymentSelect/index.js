import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Grid from '../../Grid'
import GridColumn from '../../GridColumn'

import {
    formInputSpace,
    formPaymentHeight,
    formPaymentBackground,
    formPaymentBorder,
    formPaymentBorderChecked,
    formPaymentLabelFontSize,
    formPaymentLabelFontWeight,
    formPaymentLabelTextColor
} from '../../../helpers/foundation'
import { calculateRem, calculateEm } from '../../../helpers/helper'

const InputWrapper = styled.div`
    position: relative;
    margin-bottom: ${calculateEm(2 * formInputSpace)};
`

const Input = styled.input`
    position: absolute;
    left: -200vw;    

    &:checked + label {
        border: ${formPaymentBorderChecked};
    }
`

const LabelWrapper = styled.label`
    position: relative;
    display: block;
    height: ${calculateRem(formPaymentHeight)};
    background-color: ${formPaymentBackground};
    border: ${formPaymentBorder};
    cursor: pointer;
`

const Label = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: ${calculateRem(formPaymentLabelFontSize)};
    font-weight: ${formPaymentLabelFontWeight};
    color: ${formPaymentLabelTextColor};
    transform: translate(-50%, -50%);
`

const PaymentSelect = (props) => {
    const { id, options, value, onChange, onBlur } = props

    return (
        <Grid>
            {options && options.map((option) => (
                <GridColumn key={option.val} small="6">
                    <InputWrapper>
                        <Input
                            type={'radio'}
                            id={`payment-${option.val}`}
                            name={id}
                            value={option.val}
                            checked={value === option.val}
                            onChange={onChange}
                            onBlur={onBlur}
                        />
                        <LabelWrapper htmlFor={`payment-${option.val}`}>
                            <Label>{option.name}</Label>
                        </LabelWrapper>
                    </InputWrapper>
                </GridColumn>
            ))}
        </Grid>
    )
}

PaymentSelect.propTypes = {
    id: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired
}

export default PaymentSelect