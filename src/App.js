import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Setting from "./pages/Setting";
import Sidebar from "./components/Sidebar";


export const ExpenseContext = createContext()
function App() {
  const [allExpenses, setAllExpenses] = useState([
    {
      id: 1,
      title: "Grocery",
      amount: 100,
      category: "food",
      date: new Date(2021, 2, 28),
    },
    {
      id: 2,
      title: "Shopping",
      amount: 200,
      category: "shopping",
      date: new Date(2021, 2, 28),
    },

  ])
  const [totalBalance, setTotalBalance] = useState(2300)

  return (
   <ExpenseContext.Provider value={{allExpenses,setAllExpenses,totalBalance,setTotalBalance}}>
      <BrowserRouter>
        <div className="dashboard-content">
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/ratings" element={<Dashboard />} />
            <Route path="/bar" element={<Dashboard />} />
            <Route path="/reports" element={<Dashboard />} />
            <Route path="/settings" element={<Setting />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ExpenseContext.Provider>
  );
}

export default App;
