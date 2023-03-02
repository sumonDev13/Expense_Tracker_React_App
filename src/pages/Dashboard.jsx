import React from 'react';
import './Dashboard.css';
import user from '../assets/user.png';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Categoris from '../components/Categoris';
import ThisWeekSpend from '../components/ThisWeekSpend';
import LastMonthActivities from '../components/LastMonthActivities';
import { useState } from 'react';
import ExpenseModal from './ExpenseModal';

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="dashboard-container home-page">
      <div className="add-expense">
        {/* Expense modal */}
        {showModal && <ExpenseModal handleClose={handleModalClose} />}

        <button onClick={handleModalOpen}>+ Add Expense</button>
        <img src={user} alt="" />
        <MdOutlineKeyboardArrowDown />
      </div>

      <div className="weekly-spend-categories-container">
        {/* This week spend */}
        <ThisWeekSpend />

        {/* categoris */}
        <Categoris />
      </div>

      {/* Last month activities */}
      <LastMonthActivities />
    </div>
  );
};

export default Dashboard;
