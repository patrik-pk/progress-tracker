import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './shared/style/style.css'

import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Dashboard from './components/Dashboard/Dashboard'

import GlobalStyle, { PageWrapper } from './shared/style/GlobalStyle'

const App = () => {
    return (
        <Fragment>
            <Router>
                <PageWrapper>
                    <GlobalStyle />
                    <Switch>
                        <Route path='/login' component={Login} />
                        <Route path='/register' component={Register} />
                        <Route path='/dashboard' component={Dashboard} />
                        <Route exact path='/' component={props => <Redirect to='/dashboard' />} />
                    </Switch>
                </PageWrapper>
            </Router>
        </Fragment>
    )
}

export default App
