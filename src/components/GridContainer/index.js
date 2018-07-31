import PropTypes from 'prop-types'
import styled from 'styled-components'

import { calculateRem } from '../../helpers/helper'
import {
    globalWidth,
    globalPadding
} from '../../helpers/foundation'

const GridContainer = styled.div`
    max-width: ${calculateRem(globalWidth)};
    margin: 0 auto;
    padding-right: ${(props) => props.noPadding ? 0 : calculateRem(globalPadding)}
    padding-left: ${(props) => props.noPadding ? 0 : calculateRem(globalPadding)}
`

GridContainer.propTypes = {
    children: PropTypes.node.isRequired
}

export default GridContainer