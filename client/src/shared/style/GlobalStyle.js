import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        box-sizing: border-box;
    }

    li {
        list-style: none;
    }

    a {
        color: black;
        text-decoration: none;
    }

    button, input {
        border: none;
        outline: none;
    }
`

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`
