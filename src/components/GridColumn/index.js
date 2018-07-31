import styled from 'styled-components'

import {
    breakpoints,
    gridCount,
    gridGutter
} from '../../helpers/foundation'
import { calculateRem } from '../../helpers/helper'

const getWidth = (columns, base) => ((columns * 100) / base) + '%'
const columnBreakpoint = (breakpoint, columnSize) => `
    @media (min-width: ${breakpoint}) {
        width: calc(${columnSize} - ${calculateRem(gridGutter)});
    }
`

const GridColumn = styled.div`
    flex: 0 0 auto;
    margin-right: ${calculateRem(gridGutter / 2)};
    margin-left: ${calculateRem(gridGutter / 2)};
    width: calc(100% - ${calculateRem(gridGutter)});

    ${props => props.small ? columnBreakpoint(breakpoints.small, getWidth(props.small, gridCount)) : ''}
    ${props => props.medium ? columnBreakpoint(breakpoints.medium, getWidth(props.medium, gridCount)) : ''}
    ${props => props.large ? columnBreakpoint(breakpoints.large, getWidth(props.large, gridCount)) : ''}
    ${props => props.xlarge ? columnBreakpoint(breakpoints.xlarge, getWidth(props.xlarge, gridCount)) : ''}
`

export default GridColumn