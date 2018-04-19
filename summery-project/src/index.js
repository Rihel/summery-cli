import React, {Component} from 'react'
import {render} from 'react-dom'
import styles from "./index.less"
import { Provider } from 'react-redux'
import store from "./store"
import App from './router/routerMap'

render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('app'));