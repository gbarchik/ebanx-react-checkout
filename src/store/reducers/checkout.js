// Constants
export const BUY_NOW = 'BUY_NOW'

// Actions
export const purchaseConcluded = (cart, steps) => {
    return ({
        type: BUY_NOW,
        cart,
        steps
    })
}

// Dispatchers
export const buyNow = (cart, steps) => dispatch => dispatch(purchaseConcluded(cart, steps))

// Reducer
const initialState = {
    bought: false,
    title: 'Purchase realized with success!',
    message: '',
    itens: [],
    total: 0,
    userInfo: {}
}

const defaultMessages = {
    boleto: 'The boleto was created with success and sent to email <strong>##email##</strong>',
    cc: 'The payment using the credit card <strong>##cc##</strong> was made successfully'
}

export const checkoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_NOW:
            const { cart, steps } = action
            // Need the steps
            const userInfo = steps.reduce((infos, step) =>
                step.fields.reduce((stepInfos, field) => {

                    // Don't include conditional fields if it's not necessary
                    if (field.conditional) {
                        const conditionalField = step.fields.filter((filterField) => filterField.name === field.conditional.inputName)
                        if (conditionalField[0].val !== field.conditional.inputValue) {
                            return stepInfos
                        }
                    }

                    // Create a new field with the card number with hidden numbers
                    if (field.name === 'card-number') {
                        stepInfos['card-number-hidden'] = `${field.val.substring(0, 7)}** ****${field.val.substring(14)}`
                    }

                    stepInfos[field.name] = field.val

                    return stepInfos
                }, infos)
                , {})

            return {
                ...state,
                bought: true,
                message: (userInfo.paymentType === 'credit-card') ? (
                    defaultMessages.cc.replace('##cc##', userInfo['card-number-hidden'])
                ) : (
                    defaultMessages.boleto.replace('##email##', userInfo['email'])
                ),
                itens: cart.products,
                total: cart.total,
                userInfo
            }

        default:
            return state
    }
}

export default checkoutReducer