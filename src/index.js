import React from 'react'
import { createRoot } from 'react-dom/client'
import { Main } from './components'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>
)
