import {ExpenseItem} from './ExpenseItem';

export const ExpensesList = (props) => {

    if(props.items.length===0){
        return (<h2>Found no expenses.</h2>)
    }
    return(
        <ul>{props.items.map((expense) => {
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
        })}</ul>
    )
}