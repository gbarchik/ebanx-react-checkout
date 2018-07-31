import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import GridContainer from '../GridContainer'

import {
    globalPadding,
    globalMargin,
    headerFontFamily,
    headerFontSizes,
    headerFontWeight
} from '../../helpers/foundation'
import { calculateRem, calculateEm } from '../../helpers/helper'

const StyledHeader = styled.header`
    padding: ${calculateRem(4 * globalPadding)} 0 ${calculateRem(globalPadding)}
`

const HeaderTitle = styled.h1`
    margin: 0 0 ${calculateEm((1.5 * globalMargin), headerFontSizes.h1)};
    font-family: ${headerFontFamily};
    font-size: ${calculateRem(headerFontSizes.h1)};
    font-weight: ${headerFontWeight};
`

const Header = (props) => {
    const { title, description } = props.config

    return (
        <StyledHeader>
            <GridContainer>
                <HeaderTitle>{title}</HeaderTitle>
                {description && <p>{description}</p>}
            </GridContainer>
        </StyledHeader>
    )
}
    

Header.propType = {
    config: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string
    })
}

export default Header
