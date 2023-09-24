import { useState } from "react"
import {ExpenseForm} from './ExpenseForm';

export const NewExpense = (props) => {
const [isEditing, setIsEditing] = useState(false);

const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

const startEditingHandler = ()  => {
    setIsEditing(true)
}

const stopEditingHandler = ()  => {
    setIsEditing(false)
}

return (
    <div>
    { !isEditing && (<button onClick={startEditingHandler}>Add New Expense</button>)}
    
    { isEditing && ( <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel = {stopEditingHandler}></ExpenseForm>)}
    </div>
)
}