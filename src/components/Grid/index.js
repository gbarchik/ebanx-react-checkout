import PropTypes from 'prop-types'
import styled from 'styled-components'

import { gridGutter } from '../../helpers/foundation'
import { calculateRem } from '../../helpers/helper'

const Grid = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin-right: ${calculateRem(-0.5 * gridGutter)}
    margin-left: ${calculateRem(-0.5 * gridGutter)}
`

Grid.propTypes = {
    children: PropTypes.node.isRequired
}

export default Grid