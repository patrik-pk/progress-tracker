import styled from 'styled-components'
import { 
    DARK_SURFACE ,
    PINK,
} from '../../../shared/style/Colors'

export const Heading = styled.h3`
    display: flex;
    align-items: center;
    font-weight: normal;
    font-size: 20px;
    color: white;
`

export const Form = styled.form`
    margin-top: 10px;
    color: white;
`

export const InputGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 180px;
    margin-top: 10px;
    margin-left: 10px;

    &.item {
        width: 300px;

        input, div {
            width: 190px;
        }
    }
`

export const Paragraph = styled.p`
    &.input-heading {
        margin-top: 20px;
        margin-bottom: 15px;
        font-weight: bold;
    }
`

export const Input = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    margin-left: 5px;
    height: 40px;
    background: ${DARK_SURFACE};
    color: white;
    text-align: center;
    font-size: 16px;
    border-radius: 15px;
`

// TODO: make a better solution for this
export const Items = styled.ul`
    max-width: 900px;
    &.grid {
        display: grid;
        grid-template-columns: 1fr 1fr;

        li {
            &:first-child { order: 0; }
            &:nth-child(2) { order: 20; }
            &:nth-child(3) { order: 40; }
            &:nth-child(4) { order: 10; }
            &:nth-child(5) { order: 30; }
            &:nth-child(6) { order: 50; }
        }
    }

    &.max {
        li {
            &:nth-child(4) { order: 60;  }
            &:nth-child(5) { order: 10;  }
            &:nth-child(6) { order: 30;  }
            &:nth-child(7) { order: 50;  }
            &:nth-child(8) { order: 70; }
        }
    }
`

export const ItemContainer = styled.li`
    display: flex;
    align-items: center;
    margin-top: 10px;

    div {
        margin-top: 0;
    }
`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin-left: 10px;
    padding: 2px 0;
    background: ${DARK_SURFACE};
    color: white;
    font-size: 16px;
    border-radius: 50%;
    cursor: pointer;
    transition: 500ms background;

    &:hover {
        background: ${PINK};
    }

    &.submit {
        width: 130px;
        border-radius: 15px;
    }
`

export const SubmitContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
`

export const ValidationParagraph = styled.p`
    margin-left: 10px;
    color: ${PINK};
`