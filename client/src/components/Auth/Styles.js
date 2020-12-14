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
    margin-top: 130px;
    text-align: center;
    font-size: 20px;
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
    margin-top: 80px;
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
    margin-top: 30px;
    margin-bottom: 50px;
    text-align center;
    font-size: 22px;
    color: ${PINK};

    @media ${device.small} {
        margin-top: 60px;
        font-size: 26px;
    }

    @media ${device.medium} {
        font-size: 28px;
    }

    @media ${device.large} {
        font-size: 26px;
    }
`

export const Options = styled.div`
    margin-bottom: 60px;
`

export const OptionLink = styled(NavLink)`
    padding: 8px 16px;
    border-bottom: 1px ${DARK_INACTIVE} solid;
    color: ${DARK_INACTIVE};

    &.active {
        border-color: ${PINK};
        color: ${PINK};
    }

    @media ${device.small} {
        font-size: 18px;
    }

    @media ${device.large} {
        font-size: 16px;
    }
`

export const AuthForm = styled.form.attrs(props => ({
    className: props.className
}))`
    width: 250px;

    @media ${device.small} {
        width: 300px;
    }
`

export const Input = styled.input`
    width: 100%;
    flex-grow: 1;
    margin-bottom: 15px;
    padding: 12px;
    background: transparent;
    font-size: 16px;
    border: 1px ${LIGHT} solid;
    border-radius: 15px;
    color: ${LIGHT};

    @media ${device.small} {
        padding: 14px;
        font-size: 18px;
    }

    @media ${device.large} {
        padding: 12px;
        font-size: 16px;
    }
`

export const SubmitButton = styled.button`
    width: 100%;
    padding: 12px 0;
    background: ${PINK};
    color: white;
    font-size: 16px;
    border-radius: 15px;
    cursor: pointer;

    @media ${device.small} {
        padding: 14px;
        font-size: 18px;
    }

    @media ${device.large} {
        padding: 12px;
        font-size: 16px;
    }
`

export const Paragraph = styled.p`
    margin-top: 30px;
    margin-bottom: 50px;
    font-size: 14px;
    text-align: center;
    color: ${LIGHT};

    @media ${device.small} {
        margin-top: 50px;
        margin-bottom: 70px;
        font-size: 16px;
    }

    @media ${device.large} {
        font-size: 14px;
    }
`

export const Colored = styled.span`
    color: ${PINK};
`