import React, {Component} from 'react'
import {render} from 'react-dom'
import "./index.scss"
import { Provider } from 'react-redux'
import store from "./store"
import App from './router/routerMap'

//如果需要使用rem单位，解开下列注释
// import "lib-flexible";
//解决移动端样式伪类active的问题
document.body.addEventListener('touchstart',function(){});
render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('app'));