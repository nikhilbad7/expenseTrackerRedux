import { useState } from "react"

export const Expenses = (props) => {

    const [filteredYear,setFilteredYear] = useState('2019');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
    <div>
        <Card>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}>
            </ExpensesFilter>
            <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
            <ExpensesList items={filteredExpenses}></ExpensesList>
        </Card>
    </div>)
}