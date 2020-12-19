import styled from 'styled-components'
import {
    DARK,
    DARK_SURFACE,
    PINK,
} from '../../shared/style/Colors'

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

// ACTUAL TABLE
export const ActualTable = styled.table`
    display: grid;
    border-collapse: collapse;
    grid-template-columns: 
        minmax(150px, 1fr)
        minmax(150px, 1fr)
        minmax(150px, 1fr)
        minmax(150px, 1fr)
        minmax(150px, 1fr);
    flex-grow: 1;
    min-height: 50px;
    margin-top: 30px;
    overflow-y: auto;
    overflow-x: auto;

    &::-webkit-scrollbar {
        width: 16px;
    }

    &::-webkit-scrollbar-track {
        background: ${DARK_SURFACE};
    }

    &::-webkit-scrollbar-thumb {
        background: ${PINK};
    }
`

export const TableHead = styled.thead`
    display: contents;

    td {
        background: ${DARK_SURFACE};
    }
`

export const TableBody = styled.tbody`
    display: contents;
`

export const TableRow = styled.tr`
    display: contents;

    &.main {
        td {

        }
    }
`

export const RowItem = styled.td`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: white;
`