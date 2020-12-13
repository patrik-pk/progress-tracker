import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    AuthSection,
    ImageSection,
    Heading,
    IconContainer,
    Icon,
    Container,
    Logo,
    Options,
    OptionLink,
    AuthForm,
    Input,
    SubmitButton,
    Paragraph,
    Colored
} from './Styles'

const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const { email, password } = user

    const onChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        console.log(user)
    }

    return (
        <AuthSection>
            <ImageSection>
                <Heading>Track your activities and control your progress online</Heading>

                <IconContainer>
                    <Icon />
                </IconContainer>
            </ImageSection>

            <Container>
                <Logo>Progress Tracker</Logo>

                <Options>
                    <OptionLink to='/login'>Sign In</OptionLink>
                    <OptionLink to='/register'>Sign Up</OptionLink>
                </Options>

                <AuthForm onSubmit={onSubmit} className='auth-form'>
                    <Input
                        name='email'
                        type='email'
                        placeholder='E-mail'
                        value={email}
                        onChange={onChange}
                        required
                    />
                    <Input
                        name='password'
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={onChange}
                        required
                    />
                    <SubmitButton type='submit'>Sign In</SubmitButton>
                </AuthForm>

                <Paragraph>
                    Don't have an account yet?
                    <Link to='/register'>
                        <Colored> Sign Up </Colored>
                    </Link>
                </Paragraph>
            </Container>
        </AuthSection>
    )
}

export default Login
