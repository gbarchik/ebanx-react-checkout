import React, { Component } from 'react'
import PropTypes from 'prop-types'

import GridContainer from '../GridContainer'
import Grid from '../Grid'
import GridColumn from '../GridColumn'
import PaymentStep from '../PaymentStep'
import Label from '../Form/Label'
import ErrorMessage from '../Form/ErrorMessage'
import Input from '../Form/Input'
import Select from '../Form/Select'
import PaymentSelect from '../Form/PaymentSelect'
import Button from '../Form/Button'

// Helpers to check form validation
const validateStep = (step) => step.fields.reduce((isValid, field) => {
    if (field.conditional && !showConditional(field.conditional, step)) {
        return isValid
    }

    return field.valid.isValid ? isValid : false
}, true)

const validateInput = (val, validators) =>
    validators.reduce((valid, validator) =>
        (valid.isValid && !validator.validator(val)) ? { isValid: false, message: validator.message } : valid
        , { isValid: true, message: '' })

// Helper for conditional input
const showConditional = (conditional, step) => {
    let shouldShow = true

    if (conditional) {
        const conditionalInput = step.fields.filter((field) => field.name === conditional.inputName)
        if (conditionalInput[0].val !== conditional.inputValue) {
            shouldShow = false
        }
    }

    return shouldShow
}


class Payment extends Component {
    constructor(props) {
        super(props)

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleInputBlur = this.handleInputBlur.bind(this)
    }

    handleInputChange(e, fieldIndex, step, stepIndex) {
        const val = e.target.value
        let newStep = {
            ...step,
            fields: step.fields.map((field, i) => {
                return fieldIndex === i ? {
                    ...field,
                    val,
                    valid: validateInput(val, field.validators)
                } : {
                    ...field
                }
            })
        }

        // Validates the step
        newStep.isComplete = validateStep(newStep)

        // Updates the value of the field,
        // checks its validity and the
        // step validity
        this.props.updateStep(newStep, stepIndex)

        // If the step is valid, allow the user to fill the next step
        // If a previous step is invalid, return to that step
        if ((stepIndex === this.props.payment.step) && newStep.isComplete) {
            this.props.goToStep(stepIndex + 1)
        } else if ((stepIndex < this.props.payment.step) && !newStep.isComplete) {
            this.props.goToStep(stepIndex)
        }
    }

    handleInputBlur(e, fieldIndex, step, stepIndex) {

        // Updates the field dirty state
        this.props.updateStep({
            ...step,
            fields: step.fields.map((field, i) => {
                return fieldIndex === i ? {
                    ...field,
                    dirty: e.target.value ? true : field.dirty
                } : {
                    ...field
                }
            })
        }, stepIndex)
    }

    render() {
        const { payment, cart, buyNow } = this.props
        const { steps } = payment

        const getField = (field, fieldIndex, step, stepIndex) => {
            const {
                size,
                name,
                title,
                type,
                placeholder,
                val,
                options,
                mask,
                dirty,
                conditional,
                valid
            } = field

            let TheField = ''

            switch (type) {
                case 'select':
                    TheField = (
                        <Select
                            dirty={dirty}
                            placeholder={placeholder}
                            id={name}
                            value={val}
                            options={options}
                            onChange={(e) => this.handleInputChange(e, fieldIndex, step, stepIndex)}
                            onBlur={(e) => this.handleInputBlur(e, fieldIndex, step, stepIndex)}
                        />
                    )
                    break

                case 'paymentSelect':
                    TheField = (
                        <PaymentSelect
                            id={name}
                            value={val}
                            options={options}
                            onChange={(e) => this.handleInputChange(e, fieldIndex, step, stepIndex)}
                            onBlur={(e) => this.handleInputBlur(e, fieldIndex, step, stepIndex)}
                        />
                    )
                    break

                default:
                    TheField = (
                        <Input
                            placeholder={placeholder}
                            id={name}
                            type={type}
                            mask={mask}
                            value={val}
                            onChange={(e) => this.handleInputChange(e, fieldIndex, step, stepIndex)}
                            onBlur={(e) => this.handleInputBlur(e, fieldIndex, step, stepIndex)}
                        />
                    )
            }

            return (
                <GridColumn medium={size} key={name} style={showConditional(conditional, step) ? {} : { display: 'none' }}>
                    <Label htmlFor={name}>{title}</Label>
                    {TheField}
                    {(dirty && !valid.isValid) && <ErrorMessage>{valid.message}</ErrorMessage>}
                </GridColumn>
            )
        }

        return (
            <GridContainer>
                {steps && steps.map((step, stepIndex) => (
                    <PaymentStep
                        key={step.title}
                        title={step.title}
                        stepNumber={(stepIndex + 1)}
                        contentVisible={step.isVisible && payment.isFormVisible}>

                        <Grid>
                            {step.fields && step.fields.map((field, fieldIndex) => {
                                return getField(field, fieldIndex, step, stepIndex)
                            })}

                            {stepIndex === 2 && (
                                <GridColumn>
                                    <Button
                                        type={'button'}
                                        disabled={payment.step !== 3}
                                        onClick={() => buyNow(cart, steps)}
                                    >BUY NOW</Button>
                                </GridColumn>
                            )}
                        </Grid>
                    </PaymentStep>
                ))}
            </GridContainer>
        )
    }
}

Payment.propTypes = {
    updateStep: PropTypes.func.isRequired,
    goToStep: PropTypes.func.isRequired,
    buyNow: PropTypes.func.isRequired,
    payment: PropTypes.shape({
        steps: PropTypes.array.isRequired
    }),
    cart: PropTypes.object.isRequired
}

export default Payment