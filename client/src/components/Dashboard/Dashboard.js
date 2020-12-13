import React, { Fragment } from 'react'

import Navbar from '../Navbar/Navbar'
import {
    DashboardContainer,
    Sidebar,
    Chart
} from './Styles'

const Dashboard = () => {
    return (
        <Fragment>
            <Navbar />
            <DashboardContainer>
                <Sidebar />
                <Chart />
            </DashboardContainer>
        </Fragment>
    )
}

export default Dashboard
