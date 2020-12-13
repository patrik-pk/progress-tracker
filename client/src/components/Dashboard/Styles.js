import styled from 'styled-components'
import {
    DARK,
    DARK_SURFACE
} from '../../shared/style/Colors'

export const DashboardContainer = styled.div`
    display: flex;
    flex-grow: 1;
    padding: 30px 30px 0 30px;
    background: ${DARK_SURFACE};
`

export const Sidebar = styled.div`
    width: 200px;
    height: 300px;
    background: ${DARK};
`

export const Chart = styled.div`
    flex-grow: 1;
    height: 300px;
    margin-left: 30px;
    background: ${DARK};
`