import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

//Public Component
import HomeComponent from './public/components/home'

//Private Component
import AccountComponent from './private/components/account'
import DashboardComponent from './private/components/dashboard'
import TradeComponent from './private/components/trade'

//Shared Component
import NavigationComponent from './shared/components/navigation'

function App() {
  return (
    <AppMain>
      <Router>
        {/* Navigation Bar */}
        <NavigationComponent />
        {/* Trade Activity bar */}
        <Switch>
          <Route exact path="/account">
            <AccountComponent />
          </Route>
          <Route exact path="/trade">
            <TradeComponent />
          </Route>
          <Route exact path="/dashboard">
            <DashboardComponent />
          </Route>
          <Route path="/">
            <HomeComponent />
          </Route>
        </Switch>
        {/* Routes */}
      </Router>
    </AppMain>
  )
}

export default App

const AppMain = styled.div`
  position: relative;
`
