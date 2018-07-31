import { baseFontSize } from './foundation'

/**
 * Calculate Base
 * Constructor
 */

const calculate = (unit, defaultBase) => (size, base = defaultBase) => (size / base) + unit

/**
 * Get REM from PX
 */

export const calculateRem = calculate('rem', ((baseFontSize / 100) * 16))

/**
 * Get EM from PX
 */

export const calculateEm = calculate('em', ((baseFontSize / 100) * 16))

/**
 * Format to Currency
 * Reais
 */
export const currencyFormatBR = (num) => {
    let formattedNum = parseFloat(num).toFixed(2).split('.')
    formattedNum[0] = `R$ ${formattedNum[0].split(/(?=(?:...)*$)/).join('.')}`
    return formattedNum.join(',')
}