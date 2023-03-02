import React, { useContext } from 'react';
import { ExpenseContext } from '../App';
import { AiOutlineSetting, AiFillCar, AiOutlineStar } from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { RxDashboard } from 'react-icons/rx';
import { BiLogOutCircle } from 'react-icons/bi';
// import { BsKey } from 'react-icons/bs';
import logo from '../assets/logo.png';
import wallet from '../assets/Wallet.png';
import bg from '../assets/Decoration.png';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const { allExpenses, setAllExpenses ,totalBalance} = useContext(ExpenseContext);
  console.log(`allExpenses ${allExpenses}`);
  const navLinks = [
    {
      icon: <RxDashboard />,
      path: '/',
    },
    {
      icon: <AiOutlineStar />,
      path: '/ratings',
    },
    {
      icon: <CgFileDocument />,
      path: '/bar',
    },
    {
      icon: <HiOutlineDocumentReport />,
      path: '/reports',
    },
    {
      icon: <AiOutlineSetting />,
      path: '/settings',
    },
  ];

  return (
    <div className="sidebar-container">
      <div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <ul>
          {navLinks.map((link, i) => (
            <li>
              <NavLink key={i} to={link.path} activeClassName="active">
                {link.icon}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="logout-icon">
          <BiLogOutCircle />
        </div>
      </div>

      <div>
        <div className="expense-manager">
          <h5>Kösten</h5>
          <span>Expense manager</span>
        </div>

        <div className="current-balance">
          <p>Current Balance</p>
          <div>
            <img src={wallet} alt="" />
            <div>
              <h4>${totalBalance}</h4>
              <span>Total Expense</span>
            </div>
          </div>
          <div className="current-balace-bg">
            <img src={bg} alt="" />
          </div>
        </div>

        <div className="latest-activity">
          <span>Latest Activity</span>

          <div className="activity todays-activity">
            <div>
              <span>Today</span>
              {allExpenses.slice(0,2).map((expense, i) => (
                <div key={i} className="activity-details">
                  <div>
                    <AiFillCar />
                    <h6>{expense.title}</h6>
                  </div>
                  <h5>-${expense.amount}</h5>
                </div>
              ))}
            </div>
           
          </div>
          <div className="activity todays-activity">
            <div>
              <span>Yesterday</span>
              {allExpenses.slice(0,-2).map((expense, i) => (
                <div key={i} className="activity-details">
                  <div>
                    <AiFillCar />
                    <h6>{expense.title}</h6>
                  </div>
                  <h5>-${expense.amount}</h5>
                </div>
              ))}
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
