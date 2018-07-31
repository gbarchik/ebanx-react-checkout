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

// Helpers to check form validation
const validateStep = (step) => step.fields.reduce((isValid, field) => field.valid.isValid ? isValid : false, true)

const validateInput = (val, validators) =>
    validators.reduce((valid, validator) =>
        (valid.isValid && !validator.validator(val)) ? { isValid: false, message: validator.message } : valid
        , { isValid: true, message: '' })


class Payment extends Component {
    constructor(props) {
        super(props)

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleInputBlur = this.handleInputBlur.bind(this)
    }

    handleInputChange(e, fieldIndex, step, stepIndex) {
        const val = e.target.value
        let fields = step.fields

        fields[fieldIndex] = {
            ...fields[fieldIndex],
            val: val,
            valid: validateInput(val, fields[fieldIndex].validators)
        }

        this.props.updateStep({
            ...step,
            fields
        }, stepIndex)
    }

    handleInputBlur(e, fieldIndex, step, stepIndex) {
        let fields = step.fields

        // Check if the Step is already valid
        const isStepValid = validateStep(step)

        fields[fieldIndex] = {
            ...fields[fieldIndex],
            dirty: e.target.value ? true : fields[fieldIndex].dirty
        }

        this.props.updateStep({
            ...step,
            isComplete: isStepValid,
            fields
        }, stepIndex)

        // If the step is valid, allow the user to fill the next step
        // If a previous step is invalid, return to that step
        if ((stepIndex === this.props.payment.step) && isStepValid) {
            this.props.goToStep(stepIndex + 1)
        } else if ((stepIndex < this.props.payment.step) && !isStepValid) {
            this.props.goToStep(stepIndex)
        }
    }

    render() {
        const { payment } = this.props
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
                <GridColumn medium={size} key={name}>
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
    payment: PropTypes.shape({
        steps: PropTypes.array.isRequired
    })
}

export default Payment