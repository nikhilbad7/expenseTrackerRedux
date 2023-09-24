export const ExpenseItem = (props) => {
    return(
        <li>
            <Card>
                <ExpenseDate date={ props.date}></ExpenseDate>
                <div>
                    <h2>{props.title}</h2>
                    <div>${props.amount}</div>
                </div>
            </Card>
        </li>
    )
}