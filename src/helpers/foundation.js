export const colors = {
    white: '#ffffff',
    black: '#000000',
    lightGray: '#f7f7f7',
    mediumGray: '#d8d8d8',
    darkGray: '#979797',
    red: '#ff0000'
}

export const breakpoints = {
    small: '0',
    medium: '640px',
    large: '1024px',
    xlarge: '1200px'
}

export const globalWidth = 940
export const globalMargin = 20
export const globalPadding = 20

export const gridCount = 12
export const gridGutter = globalMargin

export const baseFontFamily = '\'Montserrat\', sans-serif'
export const baseFontSize = ((14 * 100) / 16)
export const baseFontColor = colors.black
export const baseLineHeight = 1.5
export const baseBorderBox = 'border-box'
export const baseBackgroundColor = colors.white

export const headerFontFamily = baseFontFamily
export const headerFontWeight = 700
export const headerFontSizes = {
    'h1': 18,
    'h2': 14
}

export const formLabelFontFamily = baseFontFamily
export const formLabelFontSize = 12
export const formLabelTextColor = colors.black
export const formErrorFontFamily = baseFontFamily
export const formErrorFontSize = 10
export const formErrorTextColor = colors.red
export const formErrorSpace = 0.8 * globalMargin
export const formInputHeight = 48
export const formInputFontSize = 12
export const formInputTextColor = colors.black
export const formInputLetterSpacing = '0.5px'
export const formInputPlaceholderColor = colors.mediumGray
export const formInputPadding = globalPadding
export const formInputSpace = globalMargin
export const formInputBackground = colors.white
export const formInputBorder = `1px solid ${colors.mediumGray}`
export const formInputBorderFocus = `1px solid ${colors.darkGray}`
export const formInputTransition = `border-color 0.4s`
export const formPaymentHeight = 100
export const formPaymentBackground = colors.white
export const formPaymentBorder = `3px solid ${colors.white}`
export const formPaymentBorderChecked = `3px solid ${colors.mediumGray}`
export const formPaymentLabelFontSize = 14
export const formPaymentLabelFontWeight = 700
export const formPaymentLabelTextColor = colors.black

export const buttonFontFamily = baseFontFamily
export const buttonFontWeight = 700
export const buttonFontSize = 12
export const buttonTextColor = colors.white
export const buttonPadding = 16
export const buttonBackgroundColor = colors.black
export const buttonHoverBackgroundColor = colors.darkGray