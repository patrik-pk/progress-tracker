import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {
    DARK,
    DARK_INACTIVE,
    LIGHT,
    PINK
} from '../../shared/style/Colors'
import device from '../../shared/style/MediaQueries'
import { ReactComponent as Rocket } from '../../img/rocket.svg'

export const AuthSection = styled.section`
    display: flex;
    flex-grow: 1;
    background: ${DARK};
`

// Image Section - only on large devices (on the left side)
export const ImageSection = styled.div`
    display: none;
    width: 50%;
    background: ${PINK};

    @media ${device.large} {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const Heading = styled.h3`
    width: 75%;
    margin-top: 8rem;
    text-align: center;
    font-size: 1.2rem;
    font-weight: normal;
    color: ${DARK};

    @media ${device.extraLarge} {
        width: 50%;
    }
`

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 5rem;
`

export const Icon = styled(Rocket)`
    width: 60%;
    fill: ${DARK};

    @media ${device.extraLarge} {
        width: 40%;
    }
`

// Form Section
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    width: 100%;

    @media ${device.large} {
        width: 50%;
    }
`

export const Logo = styled.h3`
    margin-top: 2rem;
    margin-bottom: 3rem;
    text-align center;
    font-size: 1.3rem;
    color: ${PINK};

    @media ${device.small} {
        margin-top: 4rem;
        font-size: 1.6rem;
    }

    @media ${device.medium} {
        font-size: 1.8rem;
    }

    @media ${device.large} {
        font-size: 1.6rem;
    }
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

    @media ${device.small} {
        font-size: 1.2rem;
    }

    @media ${device.large} {
        font-size: 1rem;
    }
`

export const AuthForm = styled.form.attrs(props => ({
    className: props.className
}))`
    width: 16rem;

    @media ${device.small} {
        width: 20rem;
    }
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

    @media ${device.small} {
        padding: 0.9rem;
        font-size: 1.2rem;
    }

    @media ${device.large} {
        padding: 0.8rem;
        font-size: 1rem;
    }
`

export const SubmitButton = styled.button`
    width: 100%;
    padding: 0.75rem 0;
    background: ${PINK};
    color: white;
    font-size: 1rem;
    border-radius: 1rem;
    cursor: pointer;

    @media ${device.small} {
        padding: 0.9rem;
        font-size: 1.2rem;
    }

    @media ${device.large} {
        padding: 0.8rem;
        font-size: 1rem;
    }
`

export const Paragraph = styled.p`
    margin-top: 2rem;
    margin-bottom: 3rem;
    font-size: 0.85rem;
    text-align: center;
    color: ${LIGHT};

    @media ${device.small} {
        margin-top: 3rem;
        margin-bottom: 4rem;
        font-size: 1rem;
    }

    @media ${device.large} {
        font-size: 0.9rem;
    }
`

export const Colored = styled.span`
    color: ${PINK};
`