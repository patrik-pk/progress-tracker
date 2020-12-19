import styled from 'styled-components'
import {
    DARK_SURFACE,
    DARK
} from '../../shared/style/Colors'

export const DashboardContainer = styled.div`
    display: flex;
    flex-grow: 1;
    padding: 30px;
    background: ${DARK_SURFACE};
`

// Height = 100vh - navbar height - 2x padding
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    max-height: calc(100vh - 60px - 60px);
    margin-left: 30px;
    padding: 30px;
    background: ${DARK};
    overflow: hidden;
`