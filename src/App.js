import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './containers/Landing'
import NotFound from './containers/404'

function App() {
  return (
    <div classname={'app'} maxWidth={'sm'}>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
