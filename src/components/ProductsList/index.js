import PropTypes from 'prop-types'
import styled from 'styled-components'

const ProductsList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`

ProductsList.propTypes = {
    children: PropTypes.node.isRequired
}

export default ProductsList