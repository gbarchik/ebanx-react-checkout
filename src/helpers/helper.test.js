import {
    calculateRem,
    calculateEm,
    currencyFormatBR,
} from './helper'

describe('(Helpers) Helper', () => {
    describe('Calculate REM', () => {
        it('should return a REM value when called', () => {
            expect(calculateRem(16)).toBe('1.1428571428571428rem')
            expect(calculateRem(16)).toMatch(/rem$/)
        })

        it('should change the returned value according to the base value', () => {
            expect(calculateRem(16)).toBe('1.1428571428571428rem')
            expect(calculateRem(16, 10)).toBe('1.6rem')
        })
    })

    describe('Calculate EM', () => {
        it('should return a EM value when called', () => {
            expect(calculateEm(16)).toBe('1.1428571428571428em')
            expect(calculateEm(16)).toMatch(/em$/)
        })

        it('should change the returned value according to the base value', () => {
            expect(calculateEm(16)).toBe('1.1428571428571428em')
            expect(calculateEm(16, 10)).toBe('1.6em')
        })
    })

    describe('Formatting Currency - Brazilian Real', () => {
        it('should return the value in brazilian real', () => {
            expect(currencyFormatBR(16)).toBe('R$ 16,00')
            expect(currencyFormatBR(16)).toMatch(/^R\$/)
        })

        it('should always return with 2 decimal numbers', () => {
            expect(currencyFormatBR(16)).toMatch(/,\d{2}$/)
            expect(currencyFormatBR(16.1234)).toMatch(/,\d{2}$/)
        })

        it('should return an empty string in case o NaN', () => {
            expect(currencyFormatBR('a')).toBe('')
            expect(currencyFormatBR('a').length).toBe(0)
        })
    })
})