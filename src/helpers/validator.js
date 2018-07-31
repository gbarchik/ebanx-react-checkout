import { validate as cpfValidator } from 'cpf-check'
import {
    number as ccNumberValidator,
    expirationDate as ccExpirationDateValidator,
    cvv as ccCVVValidator
} from 'card-validator'

const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const cepRegEx = /^[0-9]{8}$/

const validator = {
    required: (val) => val.length > 0,
    email: (val) => emailRegEx.test(val),
    cpf: (val) => cpfValidator(val.replace(/\D/g, '')).valid,
    cep: (val) => cepRegEx.test(val.replace(/\D/g, '')),
    creditCard: (val) => ccNumberValidator(val).isValid,
    expirationDate: (val) => ccExpirationDateValidator(val).isValid,
    cvv: (val) => ccCVVValidator(val).isValid
}

export default validator