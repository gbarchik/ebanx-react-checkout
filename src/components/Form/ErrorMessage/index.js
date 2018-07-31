import styled from 'styled-components'

import {
    globalMargin,
    formErrorFontFamily,
    formErrorFontSize,
    formErrorTextColor,
    formErrorSpace
} from '../../../helpers/foundation'
import { calculateRem, calculateEm } from '../../../helpers/helper'

const ErrorMessage = styled.span`
    display: block;
    margin: ${calculateEm(-1 * formErrorSpace, formErrorFontSize)} 0 ${calculateEm((globalMargin / 4), formErrorFontSize)} ${calculateEm((globalMargin / 4), formErrorFontSize)};
    font: ${calculateRem(formErrorFontSize)} ${formErrorFontFamily};
    color: ${formErrorTextColor}
`

export default ErrorMessage