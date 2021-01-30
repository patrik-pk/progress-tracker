import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addMonth } from '../../../redux/actions/monthActions'
import { processData } from './logic'
import { Container } from '../Styles'
import {
    Heading,
    Form,
    InputGroup,
    Paragraph,
    Input,
    Items,
    ItemContainer,
    Button
} from './Styles'

const AddMonth = ({ addMonth, months }) => {
    const [formData, setFormData] = useState({
        year: '',
        month: '',
        items: [
            'Day'
        ]
    })

    const { year, month, items } = formData

    const onChange = (e, index) => {
        if(typeof index !== 'undefined' && index !== null) {
            const newFormData = formData
            newFormData.items[index] = e.target.value
            setFormData({...newFormData})
        } else {
            setFormData({...formData, [e.target.name]: e.target.value})
        }
    }

    const onSubmit = e => {
        e.preventDefault()
        // console.log(formData)
        setFormData({
            year: '',
            month: '',
            items: [
                'Day'
            ]
        })

        const { formatedItems, days } = processData(items)

        console.log(formatedItems)
        console.log(days)

        addMonth({
            year,
            month,
            items: formatedItems,
            days
        })
    }

    const addItem = () => {
        if(items.length < 8) { 
            const newFormData = formData
            newFormData.items.push('')
            setFormData({...newFormData})
        }
    }

    const removeItem = index => {
        const newFormData = formData
        newFormData.items.splice(index, 1)
        setFormData({...newFormData})
    }

    const itemsClasses = () => {
        const result = []
        if(items.length > 4) result.push('grid')
        if(items.length > 6) result.push('max')
        return result.join(' ')
    }

    // console.log(months)

    return (
        <Container>
            <Heading>Add New Month</Heading>

            <Form className='add-month-form' onSubmit={onSubmit}>
                <Paragraph className='input-heading'>Date</Paragraph>

                <InputGroup>
                    <Paragraph>Year:</Paragraph> 
                    <Input type='text' name='year' onChange={onChange} value={year} /> 
                </InputGroup>

                <InputGroup>
                    <Paragraph>Month:</Paragraph>
                    <Input type='text' name='month' onChange={onChange} value={month} />
                </InputGroup>  

                <Paragraph className='input-heading'>Items</Paragraph>

                <Items className={itemsClasses()}>
                    {items.map((item, index) => {
                        return (
                            <ItemContainer key={index}>
                                <InputGroup className='item'>
                                    <Paragraph>Item {index + 1}:</Paragraph>
                                    { 
                                        index === 0 ?
                                        <Input as='div'>{item}</Input>
                                        :
                                        <Input 
                                            type='text'  
                                            onChange={e => onChange(e, index)} 
                                            value={item} 
                                        />
                                    }
                                </InputGroup>
                                {
                                    index === 0 ?
                                    <Button as='div' onClick={addItem}>+</Button>
                                    :
                                    <Button as='div' onClick={() => removeItem(index)}>-</Button>
                                }
                            </ItemContainer>
                        )
                    })}
                </Items>

                <Button className='submit' type='submit'>Submit</Button>
            </Form>    
        </Container>
    )
}

const mapStateToProps = state => ({
    months: state.months.data
})

export default connect(mapStateToProps, { addMonth })(AddMonth)
