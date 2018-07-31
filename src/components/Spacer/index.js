import styled from 'styled-components'

import { colors, globalMargin } from '../../helpers/foundation'
import { calculateRem } from '../../helpers/helper'

const Spacer = styled.hr`
    margin: ${calculateRem(globalMargin)} auto;
    border: none;
    border-bottom: 1px solid ${colors.darkGray};
`

export default Spacer