import React, { Fragment } from 'react'

import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import Chart from '../Chart/Chart'
import {
    DashboardContainer,
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
