import React, { useState ,useContext} from 'react';
import { ExpenseContext } from '../App';
import './ExpenseModal.css';

const ExpenseModal = ({ handleClose }) => {
  const [expenseName, setExpenseName] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const { allExpenses, setAllExpenses,totalBalance,setTotalBalance } = useContext(ExpenseContext);
  console.log(`allExpenses ${allExpenses}`);

  const handleExpenseNameChange = (event) => {
    setExpenseName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Do something with the category and amount values, e.g. send them to the server
    const newExpense = {
      id: allExpenses.length + 1,
      title: expenseName,
      category: category,
      amount: amount,
      date: new Date(),
    };

    // Add the new expense to the list of expenses
    setAllExpenses([...allExpenses, newExpense]);

    // Add the new expense to the total balance
    setTotalBalance(totalBalance - parseInt(amount));

    // Clear the form inputs
    setExpenseName('');
    setCategory('');
    setAmount('');


    // Close the modal
    handleClose();
  };

  return (
    <div className="expense-modal">
      <div className="expense-modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <h2>Add Expense</h2>
        <form onSubmit={handleSubmit}>
          {/* set title */}
          <label>
            Expense Name:
            <input

              type="text"
              value={expenseName}
              onChange={handleExpenseNameChange}
              placeholder="Enter expense name"
            />
          </label>
          <label>
            Category:
            <select value={category} onChange={handleCategoryChange}>
              <option value="">Select a category</option>
              <option value="Food">Food</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Transportation">Transportation</option>
              <option value="Utilities">Utilities</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label>
            Amount:
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Enter amount"
            />
          </label>
          <button type="submit">Save Expense</button>
        </form>
      </div>
    </div>
  );
};

export default ExpenseModal;
