import React from "react";
import { CiHome } from "react-icons/ci";
import { CgGames } from "react-icons/cg";
import { AiFillCar } from "react-icons/ai";
import comment from "../assets/comment.png";
import { Bar, BarChart, Cell, XAxis, YAxis } from "recharts";

const ThisWeekSpend = () => {
  const barColors = [
    "#FD4438",
    "#452F02",
    "#4807EA",
    "#FD4438",
    "#4807EA",
    "#452F02",
    "#FD4438",
  ];
  const BarData = [
    {
      day: "Mo",
      cost: 25,
    },
    {
      day: "Tu",
      cost: 35,
    },
    {
      day: "We",
      cost: 30,
    },
    {
      day: "Th",
      cost: 25,
    },
    {
      day: "Fr",
      cost: 30,
    },
    {
      day: "Sa",
      cost: 35,
    },
    {
      day: "Su",
      cost: 20,
    },
  ];
  return (
    <div>
      <div className="weekly-spend-categories-container-content">
        <div>
          <h4 className="subheading">This week spend</h4>
          <div>
            <div>
              <CgGames />
              <div className="hover-effect">
                <div>
                  <img src={comment} alt="" />
                  <span>$365</span>
                </div>
              </div>
            </div>
            <div>
              <CiHome />
            </div>
            <div>
              <AiFillCar />
            </div>
          </div>
        </div>

        <div>
          <h2>$540</h2>
          <span>Total Spend</span>
        </div>
      </div>

      <BarChart data={BarData} width={400} height={150}>
        <XAxis dataKey="day" stroke="#000000" fontSize="12px" />
        <YAxis
          tickFormatter={(tick) => `$${tick}`}
          stroke="#000000"
          fontSize="12px"
          color="#333333"
        />
        <Bar
          dataKey="cost"
          fill="#FD4438"
          barSize={20}
          color="#333333"
          radius={[5, 5, 0, 0]}
        >
          {BarData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={barColors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default ThisWeekSpend;
