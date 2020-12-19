import React from 'react'

import {
    Navigation,
    Logo,
    List,
    Item,
    LogoutIcon
} from './Styles'

const Navbar = () => {
    const logout = () => {
        console.log('logout')
    }

    return (
        <Navigation>
            <Logo to='/dashboard'>Progress Tracker</Logo>

            <List>
                <Item>John Doe</Item>
                <Item onClick={logout}>
                    <LogoutIcon />
                </Item>
            </List>
        </Navigation>
    )
}

export default Navbar
