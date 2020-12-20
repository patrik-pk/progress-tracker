import React, { useState } from 'react'
import { Container } from '../Styles'
import {
    Heading,
    Form,
    InputGroup,
    Paragraph,
    Input,
    ItemContainer,
    Button
} from './Styles'

const AddMonth = () => {
    const [items, setItems] = useState([])

    const addItem = () => {
        const { length } = items

        if(length < 10) {
            setItems([...items,
                <ItemContainer key={length}>
                    <InputGroup className='item'>
                        <Paragraph>Item {length + 2}:</Paragraph>
                        <Input type='text' />
                    </InputGroup>
                    <Button onClick={() => removeItem(length - 1)}>-</Button>
                </ItemContainer>
            ])
        }
    }

    const removeItem = index => {
        const filtered = items.filter(item => item.key !== index)
        // filter.forEach(item => {

        // })
        setItems(filtered)
    }

    

    // const items = () => {
    //     const result = []

    //     for(let i = 0; i < itemsCount - 1; i++) {
    //         result.push(
    //             <ItemContainer key={i}>
    //                 <InputGroup className='item'>
    //                     <Paragraph>Item {i + 2}:</Paragraph>
    //                     <Input type='text' />
    //                 </InputGroup>
    //                 <Button onClick={removeItem(i)}>-</Button>
    //             </ItemContainer>
    //         )
    //     }

    //     return result
    // }

    return (
        <Container>
            <Heading>Add New Month</Heading>

            <Form>
                <Paragraph className='input-heading'>Date</Paragraph>

                <InputGroup>
                    <Paragraph>Year:</Paragraph> 
                    <Input type='text' /> 
                </InputGroup>

                <InputGroup>
                    <Paragraph>Month:</Paragraph>
                    <Input type='text' />
                </InputGroup>  

                <Paragraph className='input-heading'>Items</Paragraph>

                <ItemContainer>
                    <InputGroup className='item'>
                        <Paragraph>Item 1:</Paragraph>
                        <Input as='div'>Day</Input>
                    </InputGroup>
                    <Button onClick={addItem}>+</Button>
                </ItemContainer>

                {/* <ItemContainer>
                    <InputGroup className='item'>
                        <Paragraph>Item 2:</Paragraph>
                        <Input type='text' />
                    </InputGroup>
                    <Button>-</Button>
                </ItemContainer> */}

                { items }

                <Button className='submit'>Submit</Button>
            </Form>    
        </Container>
    )
}

export default AddMonth
