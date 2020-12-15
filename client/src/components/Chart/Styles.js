import styled from 'styled-components'
import {
    DARK,
    DARK_SURFACE,
    PINK
} from '../../shared/style/Colors'

export const Container = styled.div`
    margin-left: 30px;
    padding: 30px;
    background: ${DARK};
`

// TOP ROW
export const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Heading = styled.h3`
    display: flex;
    align-items: center;
    font-weight: normal;
    font-size: 20px;
    color: white;
`

export const OptionsList = styled.ul`
    display: flex;
`

export const OptionItem = styled.li`
    padding: 10px 15px;
    background: ${DARK_SURFACE};
    text-align: center;
    color: white;
    cursor: pointer;
    transition: 500ms all;

    &:hover {
        background: ${PINK};
    }

    &.active {
        background: ${PINK};
    }

    &:first-child {
        border-radius: 15px 0 0 15px;
    }

    &:last-child {
        border-radius: 0 15px 15px 0;
    }
`

// ACTUAL CHART
export const ActualChart = styled.table`
    display: grid;
    border-collapse: collapse;
    grid-template-columns: 
        minmax(150px, 1fr)
        minmax(150px, 1fr)
        minmax(150px, 1fr)
        minmax(150px, 1fr)
        minmax(150px, 1fr);
    margin-top: 30px;
    background: ${DARK_SURFACE};
`

export const ChartHead = styled.thead`
    display: contents;
`

export const ChartBody = styled.tbody`
    display: contents;
`

export const ChartRow = styled.tr`
    display: contents;
`

export const RowItem = styled.td`
    color: white;
    padding: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`