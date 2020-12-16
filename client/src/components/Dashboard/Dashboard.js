import React, { Fragment } from 'react'

import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import Table from '../Table/Table'
import {
    DashboardContainer,
} from './Styles'

const Dashboard = () => {
    return (
        <Fragment>
            <Navbar />
            <DashboardContainer>
                <Sidebar />
                <Table />
            </DashboardContainer>
        </Fragment>
    )
}

export default Dashboard
