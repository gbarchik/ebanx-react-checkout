import styled from 'styled-components'

import {
    globalMargin,
    formLabelFontFamily,
    formLabelFontSize,
    formLabelTextColor
} from '../../../helpers/foundation'
import { calculateRem, calculateEm } from '../../../helpers/helper'

const Label = styled.label`
    display: block;
    margin-bottom: ${calculateEm((globalMargin / 4), formLabelFontSize)};
    font: ${calculateRem(formLabelFontSize)} ${formLabelFontFamily};
    color: ${formLabelTextColor}
`

export default Label