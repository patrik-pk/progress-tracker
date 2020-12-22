import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import {
    DARK,
    DARK_SURFACE,
    PINK,
} from '../../../shared/style/Colors'
import { ReactComponent as Dropdown } from '../../../img/dropdown.svg'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 400px;
    background: ${DARK};
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    padding: 0 15px;
`

export const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;

    ul {
        display: none;
    }

    &.active {
        ul {
            display: block;
        }

        .dropdown-btn {
            border-radius: 15px 15px 0 0;
        }
    }
`

export const DropdownButton = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px 10px;
    background: ${PINK};
    color: white;
    cursor: pointer;
    border-radius: 15px;
    z-index: 10;
    transition: 500ms border-radius;
`

export const DropdownParagraph = styled.p`
    font-weight: bold;
`

export const DropdownItems = styled.ul`
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    background: ${DARK_SURFACE};
    z-index: 2;
    border-radius: 0 0 15px 15px;
`

export const DropdownItem = styled.li`
    width: 100%;
    padding: 10px;
    color: white;
    cursor: pointer;
    transition: 500ms background;

    &:hover {
        background: ${PINK};
    }

    &:first-child {
        padding-top: 30px;
    }

    &:last-child {
        border-radius: 0 0 15px 15px;
    }
`

export const Arrow = styled(Dropdown)`
    width: 20px;
    height: 20px;
    fill: white;
`

export const MonthList = styled.ul`
    display: grid;
    grid-template-rows: repeat(3, 42px);
    grid-template-columns: repeat(4, 42px);
    grid-gap: 7px;
    justify-content: center;
    margin-top: 15px;
`

export const MonthItem = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${DARK_SURFACE};
    opacity: 0.4;
    border-radius: 10px;
    cursor: default;
    transition: 500ms all;

    &.exists {
        cursor: pointer;
        opacity: 1;
    }

    &.exists:hover {
        background: ${PINK};
    }
    
    &.active {
        background: ${PINK};
    }
`
    
export const MonthParagraph = styled.p`
    color: white;
`

export const AddButton = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    width: 70px;
    height: 42px;
    margin-top: 10px;
    background: ${DARK_SURFACE};
    border-radius: 15px;
    cursor: pointer;
    transition: 500ms all;

    &:hover {
        background: ${PINK};
    }

    &.active {
        background: ${PINK};
    }
`
    
export const AddParagraph = styled.p`
    color: white;
`