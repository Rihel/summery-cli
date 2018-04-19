import {
  Switch,Route,BrowserRouter as Router
} from "react-router-dom"
import routes from './routes';
import { connect } from 'react-redux';
import React, { Component } from 'react'
const mapStateToProps = (state, ownProps) => {
  return {
    count: state.count
  }
}
@connect(mapStateToProps)
export default class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          {
            routes.map((route,index)=>
              <Route 
                key={index}
                path={route.path} 
                component={route.component}
                
                />
            )
          }
        </Switch>
      </Router>
    )
  }
}



