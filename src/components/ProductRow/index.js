import React, { Component } from 'react'
import styled from 'styled-components'

import Grid from '../Grid'
import GridColumn from '../GridColumn'
import Checkbox from '../Form/Checkbox'

import {
    breakpoints,
    globalMargin,
    headerFontFamily,
    headerFontSizes,
    headerFontWeight
} from '../../helpers/foundation'
import { calculateRem, currencyFormatBR } from '../../helpers/helper'

const StyledProductRow = styled.li`
    margin-bottom: ${calculateRem(2 * globalMargin)}
`

const ProductImageWrapper = styled.div`
    margin: 0 auto 2em;
    width: 100%;
    max-width: 116px;

    @media (min-width: ${breakpoints.medium}) {
        margin: 0;
    }
`

const ProductImage = styled.figure`
    margin: 0;
    padding-bottom: 83.62%;
    width: 100%;
    height: 0;
    background-size: cover;
    background-color: #ec7063;
`

const ProductTitle = styled.h2`
    margin: 0;
    font-family: ${headerFontFamily};
    font-size: ${calculateRem(headerFontSizes.h2)};
    font-weight: ${headerFontWeight};
`

const ProductPrice = styled.span`
    font-family: ${headerFontFamily};
    font-size: ${calculateRem(headerFontSizes.h1)};
    font-weight: ${headerFontWeight};
`

class ProductRow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isChecked: false
        }

        this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    }

    handleCheckboxChange() {
        this.setState(
            (prevState) => ({
                isChecked: !prevState.isChecked
            }),
            () => {
                if (this.state.isChecked) {
                    this.props.addToCart(this.props.product)
                } else {
                    this.props.removeFromCart(this.props.product)
                }
            }
        )
    }

    render() {
        const { product } = this.props

        return (
            <StyledProductRow>
                <Grid>
                    <GridColumn small={2} medium={1} style={{ alignSelf: 'center' }}>
                        <Checkbox
                            id={`product-${product.id}`}
                            name={`product-${product.id}`}
                            onChange={this.handleCheckboxChange}
                            checked={this.state.isChecked} />
                    </GridColumn>
                    <GridColumn small={10} medium={2} style={{ alignSelf: 'center' }}>
                        <ProductImageWrapper>
                            <ProductImage style={{ backgroundImage: `url(${product.image})` }}></ProductImage>
                        </ProductImageWrapper>
                    </GridColumn>
                    <GridColumn small={8} medium={4} style={{ alignSelf: 'center' }}>
                        <ProductTitle>{product.name}</ProductTitle>
                        <span>{product.description}</span>
                    </GridColumn>
                    <GridColumn small={1} medium={3}></GridColumn>
                    <GridColumn small={3} medium={2} style={{ alignSelf: 'center', textAlign: 'right' }}>
                        <ProductPrice>{currencyFormatBR(product.price)}</ProductPrice>
                    </GridColumn>
                </Grid>
            </StyledProductRow>
        )
    }
}

export default ProductRow