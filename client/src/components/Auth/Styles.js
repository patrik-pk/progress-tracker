import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {
    DARK,
    DARK_INACTIVE,
    LIGHT,
    PINK
} from '../../shared/style/Colors'

export const AuthSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    background: ${DARK};
`

export const Logo = styled.h3`
    margin-top: 2rem;
    margin-bottom: 3rem;
    text-align center;
    font-size: 1.3rem;
    color: ${PINK};
`

export const Options = styled.div`
    margin-bottom: 4rem;
`

export const OptionLink = styled(NavLink)`
    padding: 0.5rem 1rem;
    border-bottom: 1px ${DARK_INACTIVE} solid;
    color: ${DARK_INACTIVE};

    &.active {
        border-color: ${PINK};
        color: ${PINK};
    }
`

export const AuthForm = styled.form.attrs(props => ({
    className: props.className
}))`
    width: 16rem;
`

export const Input = styled.input`
    width: 100%;
    flex-grow: 1;
    margin-bottom: 15px;
    padding: 0.7rem;
    background: transparent;
    font-size: 1rem;
    border: 1px ${LIGHT} solid;
    border-radius: 1rem;
    color: ${LIGHT};
`

export const SubmitButton = styled.button`
    width: 100%;
    padding: 0.75rem 0;
    background: ${PINK};
    color: white;
    font-size: 1rem;
    border-radius: 1rem;
`

export const Paragraph = styled.p`
    margin-top: 2rem;
    font-size: 0.85rem;
    text-align: center;
    color: ${LIGHT};
`

export const Colored = styled.span`
    color: ${PINK};
`