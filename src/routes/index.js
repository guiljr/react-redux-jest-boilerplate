import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//import App from './components/App'

import About from '../containers/About'
// import News from './containers/News'
// import Dashboard from './containers/Dashboard'

export default () => (
    <Router>
        <Switch>
            <Route path='/' component={About} />
            <Route path='/About' component={About} />           
        </Switch>
            
    </Router>
)