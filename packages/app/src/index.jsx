import 'core-js/stable'
import 'regenerator-runtime/runtime'

import React from 'react'
import { render } from 'react-dom'
import App from './App'

const renderApplication = (Component) =>
  render(<Component />, document.getElementById('content'))

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App.jsx', () =>
    renderApplication(require('./App').default),
  )
}

renderApplication(App)
