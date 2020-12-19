import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import Table from './Table/Table'
import AddMonth from './AddMonth/AddMonth'
import {
    DashboardContainer,
} from './Styles'

const Dashboard = () => {
    return (
        <Fragment>
            <Navbar />
            <DashboardContainer>
                <Sidebar />
                <Switch>
                    <Route exact path='/dashboard' component={Table} />
                    <Route exact path='/dashboard/:year/:month' component={Table} />
                    <Route exact path='/dashboard/add-month' component={AddMonth} />
                </Switch>
            </DashboardContainer>
        </Fragment>
    )
}

export default Dashboard
