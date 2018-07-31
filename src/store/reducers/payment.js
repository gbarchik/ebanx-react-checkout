import validator from '../../helpers/validator'

// Constants
export const SHOW_FORM = 'SHOW_FORM'
export const HIDE_FORM = 'HIDE_FORM'
export const UPDATE_STEP_INFO = 'UPDATE_STEP_INFO'
export const CHANGE_STEP = 'CHANGE_STEP'

// Actions
export const formShown = () => {
    return ({
        type: SHOW_FORM
    })
}
export const formHidden = () => {
    return ({
        type: HIDE_FORM
    })
}
export const stepUpdated = (step, stepIndex) => {
    return ({
        type: UPDATE_STEP_INFO,
        step,
        stepIndex
    })
}
export const stepChanged = (stepNum) => {
    return ({
        type: CHANGE_STEP,
        stepNum
    })
}

// Dispatchers
export const showForm = () => dispatch => dispatch(formShown())
export const hideForm = () => dispatch => dispatch(formHidden())
export const updateStep = (step, stepIndex) => dispatch => dispatch(stepUpdated(step, stepIndex))
export const goToStep = (stepNum) => dispatch => dispatch(stepChanged(stepNum))

// Reducer
const initialState = {
    step: 0,
    isFormVisible: false,
    steps: [
        {
            title: 'Personal data',
            isVisible: true,
            isComplete: false,
            fields: [
                {
                    name: 'name',
                    title: 'Name',
                    type: 'text',
                    placeholder: 'Your name here',
                    val: '',
                    size: 12,
                    dirty: false,
                    valid: {
                        isValid: false,
                        message: ''
                    },
                    validators: [
                        {
                            validator: validator.required,
                            message: 'This field is required'
                        }
                    ]
                },
                {
                    name: 'email',
                    title: 'E-mail',
                    type: 'email',
                    placeholder: 'Your e-mail here',
                    val: '',
                    size: 6,
                    dirty: false,
                    valid: {
                        isValid: false,
                        message: ''
                    },
                    validators: [
                        {
                            validator: validator.required,
                            message: 'This field is required'
                        },
                        {
                            validator: validator.email,
                            message: 'Check your e-mail address'
                        }
                    ]
                },
                {
                    name: 'cpf',
                    title: 'CPF',
                    type: 'text',
                    placeholder: 'Your CPF here',
                    val: '',
                    size: 6,
                    mask: [/\d/,/\d/,/\d/,'.',/\d/,/\d/,/\d/,'.',/\d/,/\d/,/\d/,'-',/\d/,/\d/],
                    dirty: false,
                    valid: {
                        isValid: false,
                        message: ''
                    },
                    validators: [
                        {
                            validator: validator.required,
                            message: 'This field is required'
                        },
                        {
                            validator: validator.cpf,
                            message: 'Check your CPF number'
                        }
                    ]
                }
            ]
        },
        {
            title: 'Billing Address',
            isVisible: false,
            isComplete: false,
            fields: [
                {
                    name: 'zipcode',
                    title: 'Zip code',
                    type: 'text',
                    placeholder: 'Your zip code here',
                    val: '',
                    size: 4,
                    onChange: () => { },
                    mask: [/\d/,/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/],
                    dirty: false,
                    valid: {
                        isValid: false,
                        message: ''
                    },
                    validators: [
                        {
                            validator: validator.required,
                            message: 'This field is required'
                        },
                        {
                            validator: validator.cep,
                            message: 'Check your zip code number'
                        }
                    ]
                },
                {
                    name: 'state',
                    title: 'State',
                    type: 'select',
                    placeholder: 'Your state here',
                    val: '',
                    size: 4,
                    dirty: false,
                    valid: {
                        isValid: false,
                        message: ''
                    },
                    validators: [
                        {
                            validator: validator.required,
                            message: 'This field is required'
                        }
                    ],
                    options: [
                        { val: 'AC', name: 'Acre' },
                        { val: 'AL', name: 'Alagoas' },
                        { val: 'AP', name: 'Amapá' },
                        { val: 'AM', name: 'Amazonas' },
                        { val: 'BA', name: 'Bahia' },
                        { val: 'CE', name: 'Ceará' },
                        { val: 'DF', name: 'Distrito Federal' },
                        { val: 'ES', name: 'Espírito Santo' },
                        { val: 'GO', name: 'Goiás' },
                        { val: 'MA', name: 'Maranhão' },
                        { val: 'MT', name: 'Mato Grosso' },
                        { val: 'MS', name: 'Mato Grosso do Sul' },
                        { val: 'MG', name: 'Minas Gerais' },
                        { val: 'PA', name: 'Pará' },
                        { val: 'PB', name: 'Paraíba' },
                        { val: 'PR', name: 'Paraná' },
                        { val: 'PE', name: 'Pernambuco' },
                        { val: 'PI', name: 'Piauí' },
                        { val: 'RJ', name: 'Rio de Janeiro' },
                        { val: 'RN', name: 'Rio Grande do Norte' },
                        { val: 'RS', name: 'Rio Grande do Sul' },
                        { val: 'RO', name: 'Rondônia' },
                        { val: 'RR', name: 'Roraima' },
                        { val: 'SC', name: 'Santa Catarina' },
                        { val: 'SP', name: 'São Paulo' },
                        { val: 'SE', name: 'Sergipe' },
                        { val: 'TO', name: 'Tocantins' }
                    ]
                },
                {
                    name: 'city',
                    title: 'City',
                    type: 'text',
                    placeholder: 'Your city here',
                    val: '',
                    size: 4,
                    dirty: false,
                    valid: {
                        isValid: false,
                        message: ''
                    },
                    validators: [
                        {
                            validator: validator.required,
                            message: 'This field is required'
                        }
                    ]
                },
                {
                    name: 'address',
                    title: 'Address',
                    type: 'text',
                    placeholder: 'Your full address here',
                    val: '',
                    size: 12,
                    dirty: false,
                    valid: {
                        isValid: false,
                        message: ''
                    },
                    validators: [
                        {
                            validator: validator.required,
                            message: 'This field is required'
                        }
                    ]
                }
            ]
        },
        {
            title: 'Payment',
            isVisible: false,
            isComplete: false,
            fields: [
                {
                    name: 'paymentType',
                    title: '',
                    type: 'paymentSelect',
                    placeholder: '',
                    val: '',
                    size: 12,
                    dirty: false,
                    valid: {
                        isValid: false,
                        message: ''
                    },
                    validators: [
                        {
                            validator: validator.required,
                            message: 'This field is required'
                        }
                    ],
                    options: [
                        {
                            val: 'boleto-bancario',
                            name: 'Boleto Bancário'
                        },
                        {
                            val: 'cerdit-card',
                            name: 'Boleto Bancário'
                        }
                    ]
                },
                {
                    name: 'cardholder-name',
                    title: 'Cardholder name',
                    type: 'text',
                    placeholder: 'Your name here',
                    val: '',
                    size: 12,
                    dirty: false,
                    valid: {
                        isValid: false,
                        message: ''
                    },
                    validators: [
                        {
                            validator: validator.required,
                            message: 'This field is required'
                        }
                    ]
                },
                {
                    name: 'card-number',
                    title: 'Card number',
                    type: 'text',
                    placeholder: '1234 5678 9101 1121',
                    val: '',
                    size: 12,
                    mask: [/\d/,/\d/,/\d/,/\d/,' ',/\d/,/\d/,/\d/,/\d/,' ',/\d/,/\d/,/\d/,/\d/,' ',/\d/,/\d/,/\d/,/\d/],
                    dirty: false,
                    valid: {
                        isValid: false,
                        message: ''
                    },
                    validators: [
                        {
                            validator: validator.required,
                            message: 'This field is required'
                        },
                        {
                            validator: validator.creditCard,
                            message: 'Check your CC number'
                        }
                    ]
                },
                {
                    name: 'due-date',
                    title: 'Due date',
                    type: 'text',
                    placeholder: '12/25',
                    val: '',
                    size: 6,
                    mask: [/\d/,/\d/,'/',/\d/,/\d/],
                    dirty: false,
                    valid: {
                        isValid: false,
                        message: ''
                    },
                    validators: [
                        {
                            validator: validator.required,
                            message: 'This field is required'
                        },
                        {
                            validator: validator.expirationDate,
                            message: 'Check the due date numbers'
                        }
                    ]
                },
                {
                    name: 'cvv',
                    title: 'CVV',
                    type: 'text',
                    placeholder: 'Your name here',
                    val: '',
                    size: 6,
                    mask: [/\d/,/\d/,/\d/],
                    dirty: false,
                    valid: {
                        isValid: false,
                        message: ''
                    },
                    validators: [
                        {
                            validator: validator.required,
                            message: 'This field is required'
                        },
                        {
                            validator: validator.cvv,
                            message: 'Check your CVV number'
                        }
                    ]
                }
            ]
        }
    ]
}

export const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_FORM:
            return {
                ...state,
                isFormVisible: true
            }

        case HIDE_FORM:
            return {
                ...state,
                isFormVisible: false
            }

        case UPDATE_STEP_INFO:
            return {
                ...state,
                steps: [
                    ...state.steps.map((step, i) => i === action.stepIndex ? action.step : step)
                ]
            }

        case CHANGE_STEP:
            return {
                ...state,
                step: action.stepNum,
                steps: [
                    ...state.steps.map((step, i) => ({ ...step, isVisible: i <= action.stepNum }))
                ]
            }

        default:
            return state
    }
}

export default paymentReducer