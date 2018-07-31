import React from 'react'
import styled from 'styled-components'

import { colors } from '../../../helpers/foundation';

const CheckboxContainer = styled.span`
    display: inline-block;
    position: relative;
`

const StyledCheckbox = styled.input`
    position: absolute;
    left: -200vw;

    &:not(:checked) + label:after {
        opacity: 0;
    }

    &:checked + label:after {
        opacity: 1;
    }
`

const FakeCheckbox = styled.label`
    position: relative;
    padding-left: 20px;
    cursor: pointer;
    transition: opacity 0.4s;

    &:before,
    &:after {
        content: '';
        display: block;
        position: absolute;
    }

    &:before {
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
        border: 2px solid ${colors.black}
    }

    &:after {
        top: 3px;
        left: 3px;
        width: 18px;
        height: 18px;
        background-color: ${colors.black}
    }
`

const Checkbox = (props) =>
    <CheckboxContainer>
        <StyledCheckbox
            {...props}
            type="checkbox" />
        <FakeCheckbox htmlFor={props.id} />
    </CheckboxContainer>

export default Checkbox