import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    AuthSection,
    Logo,
    AuthForm,
    Options,
    OptionLink,
    Input,
    SubmitButton,
    Paragraph,
    Colored
} from './Styles'

const Register = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = user

    const onChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        if (password !== password2) {
            console.log('Passwords do not match')
        } else {
            console.log(user)
        }
    }

    return (
        <AuthSection>
            <Logo>Progress Tracker</Logo>

            <Options>
                <OptionLink to='/login'>Sign In</OptionLink>
                <OptionLink to='/register'>Sign Up</OptionLink>
            </Options>

            <AuthForm onSubmit={onSubmit} className='auth-form'>
                <Input
                    name='name'
                    type='text'
                    placeholder='Name'
                    value={name}
                    onChange={onChange}
                    required
                />
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
                    minLength={6}
                />
                <Input
                    name='password2'
                    type='password'
                    placeholder='Confirm Your Password'
                    value={password2}
                    onChange={onChange}
                    required
                />
                <SubmitButton type='submit'>Sign In</SubmitButton>
            </AuthForm>

            <Paragraph>
                Already have an account?
                <Link to='/login'>
                    <Colored> Sign In </Colored>
                </Link>
            </Paragraph>
        </AuthSection>
    )
}

export default Register
