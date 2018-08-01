import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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

StyledHeader.displayName = 'Header'

const HeaderTitle = styled.h1`
    margin: 0 0 ${calculateEm((1.5 * globalMargin), headerFontSizes.h1)};
    font-family: ${headerFontFamily};
    font-size: ${calculateRem(headerFontSizes.h1)};
    font-weight: ${headerFontWeight};
`

HeaderTitle.displayName = 'HeaderTitle'

const Header = (props) => {
    const { title, description } = props.config
    const { bought } = props.checkout

    return (
        <StyledHeader>
            <GridContainer>
                <HeaderTitle>{title}</HeaderTitle>
                {description && !bought && <p>{description}</p>}
            </GridContainer>
        </StyledHeader>
    )
}
    

Header.propType = {
    config: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string
    }),
    checkout: PropTypes.shape({
        bought: PropTypes.bool.isRequired
    })
}

export default Header
