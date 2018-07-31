import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import GridContainer from '../GridContainer'
import Spacer from '../Spacer'

import {
    globalPadding,
    headerFontFamily,
    headerFontWeight
} from '../../helpers/foundation'
import { calculateRem } from '../../helpers/helper'

const StyledFooter = styled.footer`
    padding: ${calculateRem(4 * globalPadding)} 0 ${calculateRem(globalPadding)}
`

const FooterTitle = styled.span`
    display: block;
    margin: 0;
    font-family: ${headerFontFamily};
    font-weight: ${headerFontWeight};
`

const Footer = (props) => {
    const { title, poweredBy } = props.config

    return (
        <StyledFooter>
            <GridContainer>
                <Spacer />
                <FooterTitle>{title}</FooterTitle>
                {poweredBy && <span>Powered by {poweredBy}</span>}
            </GridContainer>
        </StyledFooter>
    )
}

Footer.propType = {
    config: PropTypes.shape({
        title: PropTypes.string.isRequired,
        poweredBy: PropTypes.string
    })
}

export default Footer
