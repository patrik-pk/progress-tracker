import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
    DARK,
    PINK
} from '../../shared/style/Colors'
import { ReactComponent as Logout } from '../../img/logout.svg'

export const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 60px;
    max-height: 60px;
    padding: 0 20px;
    background: ${DARK};
`

export const Logo = styled(Link)`
    color: ${PINK};
    font-weight: bold;
`

export const List = styled.ul`
    display: flex;
`

export const Item = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    color: ${PINK};
    &:first-child {
        margin-left: 0;
    }
`

export const LogoutIcon = styled(Logout)`
    width: 24px;
    height: 24px;
    fill: ${PINK};
    cursor: pointer;
`