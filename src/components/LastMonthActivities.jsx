import React, { useContext } from 'react';
import { ExpenseContext } from '../App';
import { CiHome } from "react-icons/ci";


const LastMonthActivities = () => {
  const { allExpenses, setAllExpenses } = useContext(ExpenseContext);
  console.log(`allExpenses ${allExpenses}`);
  return (
    <div className="last-month-activities">
      <div className="activities-heading">
        <div>
          <h4 className="subheading">Last Month Activities</h4>
          <span className="activities-sub-heading">Monthly Activities</span>
        </div>

        <div>
          <p>View All</p>
        </div>
      </div>
      <div>
        <span>categories Names</span>
        <span>Transactions</span>
        <span>Dates</span>
        <span>Amount</span>
      </div>

      {allExpenses.map((expense) => (
      <div key={expense.id} className="monthly-activities">
        <div>
          <CiHome className="home-icon" />
          <h4>{expense.title}</h4>
        </div>

        <div>
          <span>Successful</span>
        </div>

        <div>
          <h5>{expense.date.toLocaleDateString()}</h5>
        </div>
        <div>
          <h5>${expense.amount}</h5>
        </div>
      </div>
      ))}
    </div>
  );
};

export default LastMonthActivities;
