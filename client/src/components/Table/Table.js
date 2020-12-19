import React from 'react'
import {
    Container,
    TopContainer,
    Heading,
    OptionsList,
    OptionItem,
    ActualTable,
    TableHead,
    TableBody,
    TableRow,
    RowItem,
} from './Styles'

const Table = () => {
    return (
        <Container>
            <TopContainer>
                <Heading>January 2020</Heading>

                <OptionsList>
                    <OptionItem>Week 1</OptionItem>
                    <OptionItem>Week 2</OptionItem>
                    <OptionItem>Week 3</OptionItem>
                    <OptionItem>Week 4</OptionItem>
                    <OptionItem>Week 5</OptionItem>
                    <OptionItem className='active'>All</OptionItem>
                </OptionsList>
            </TopContainer>

            <ActualTable className='actual-table'>
                <TableHead>
                    <TableRow>
                        <RowItem>Day</RowItem>
                        <RowItem>Sleep Time</RowItem>
                        <RowItem>Food</RowItem>
                        <RowItem>Exercise</RowItem>
                        <RowItem>Productive Hours</RowItem>
                    </TableRow>
                </TableHead>

                <TableBody>
                    <TableRow>
                        <RowItem>1</RowItem>
                        <RowItem>22 - 6</RowItem>
                        <RowItem>2300kcal 10/10</RowItem>
                        <RowItem>Fullbody 45min</RowItem>
                        <RowItem>2h</RowItem>
                    </TableRow>

                    <TableRow>
                        <RowItem>2</RowItem>
                        <RowItem>23 - 7</RowItem>
                        <RowItem>2300kcal 10/10</RowItem>
                        <RowItem>Fullbody 45min</RowItem>
                        <RowItem>2h</RowItem>
                    </TableRow>

                    <TableRow>
                        <RowItem>3</RowItem>
                        <RowItem>22 - 6</RowItem>
                        <RowItem>2300kcal 10/10</RowItem>
                        <RowItem>Run 30min</RowItem>
                        <RowItem>2h</RowItem>
                    </TableRow>

                    <TableRow>
                        <RowItem>4</RowItem>
                        <RowItem>22 - 6</RowItem>
                        <RowItem>2300kcal 10/10</RowItem>
                        <RowItem>Run 30min</RowItem>
                        <RowItem>2h</RowItem>
                    </TableRow>

                    <TableRow>
                        <RowItem>5</RowItem>
                        <RowItem>22 - 6</RowItem>
                        <RowItem>2300kcal 10/10</RowItem>
                        <RowItem>Run 30min</RowItem>
                        <RowItem>2h</RowItem>
                    </TableRow>

                    <TableRow>
                        <RowItem>6</RowItem>
                        <RowItem>22 - 6</RowItem>
                        <RowItem>2300kcal 10/10</RowItem>
                        <RowItem>Run 30min</RowItem>
                        <RowItem>2h</RowItem>
                    </TableRow>

                    <TableRow>
                        <RowItem>7</RowItem>
                        <RowItem>22 - 6</RowItem>
                        <RowItem>2300kcal 10/10</RowItem>
                        <RowItem>Run 30min</RowItem>
                        <RowItem>2h</RowItem>
                    </TableRow>

                    <TableRow>
                        <RowItem>8</RowItem>
                        <RowItem>22 - 6</RowItem>
                        <RowItem>2300kcal 10/10</RowItem>
                        <RowItem>Run 30min</RowItem>
                        <RowItem>2h</RowItem>
                    </TableRow>

                    <TableRow>
                        <RowItem>9</RowItem>
                        <RowItem>22 - 6</RowItem>
                        <RowItem>2300kcal 10/10</RowItem>
                        <RowItem>Run 30min</RowItem>
                        <RowItem>2h</RowItem>
                    </TableRow>

                    <TableRow>
                        <RowItem>10</RowItem>
                        <RowItem>22 - 6</RowItem>
                        <RowItem>2300kcal 10/10</RowItem>
                        <RowItem>Run 30min</RowItem>
                        <RowItem>2h</RowItem>
                    </TableRow>
                </TableBody>

                <TableHead>
                    <TableRow>
                        <RowItem>Total</RowItem>
                        <RowItem>-</RowItem>
                        <RowItem>-</RowItem>
                        <RowItem>-</RowItem>
                        <RowItem>60h</RowItem>
                    </TableRow>
                </TableHead>
            </ActualTable>
        </Container>
    )
}

export default Table
