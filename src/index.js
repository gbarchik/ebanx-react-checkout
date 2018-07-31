import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'

import createStore from './store/createStore'

import {
    baseFontFamily,
    baseFontSize,
    baseLineHeight,
    baseFontColor,
    baseBorderBox,
    baseBackgroundColor
} from './helpers/foundation'

import App from './components/App'

import registerServiceWorker from './registerServiceWorker'

injectGlobal`
    *, *::befor, *::after {
        box-sizing: inherit;
    }

    html {
        font-family: ${baseFontFamily};
        font-size: ${baseFontSize + '%'};
        line-height: ${baseLineHeight};
        color: ${baseFontColor}
        box-sizing: ${baseBorderBox};
    }

    body {
        margin: 0;
        padding: 0;
        background: ${baseBackgroundColor};
        box-sizing: ${baseBorderBox};
    }
`

const store = createStore()

ReactDOM.render(<App store={store} />, document.getElementById('root'))
registerServiceWorker()
