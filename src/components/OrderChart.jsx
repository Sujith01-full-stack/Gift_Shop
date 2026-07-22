import React from "react";
import {
  FaChartLine,
  FaArrowUp,
} from "react-icons/fa";
import "./OrderChart.css";

const OrderChart = () => {
  const monthlyOrders = [
    { month: "Jan", orders: 15 },
    { month: "Feb", orders: 23 },
    { month: "Mar", orders: 12 },
    { month: "Apr", orders: 18 },
    { month: "May", orders: 24 },
    { month: "Jun", orders: 22 },
    { month: "Jul", orders: 20 },
    { month: "Aug", orders: 26 },
    { month: "Sep", orders: 30 },
    { month: "Oct", orders: 38 },
    { month: "Nov", orders: 45 },
    { month: "Dec", orders: 60 },
  ];

  const maxValue = Math.max(
    ...monthlyOrders.map((item) => item.orders)
  );

  return (
    <div className="order-chart">

      <div className="chart-header">

        <h2>
          <FaChartLine />
          Monthly Orders
        </h2>

        <div className="growth">
          <FaArrowUp />
          18%
        </div>

      </div>

      <div className="chart-bars">

        {monthlyOrders.map((item) => (
          <div
            className="bar-group"
            key={item.month}
          >
            <span className="bar-value">
              {item.orders}
            </span>

            <div
              className="bar"
              style={{
                height: `${(item.orders / maxValue) * 220}px`,
              }}
            ></div>

            <span className="month">
              {item.month}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
};

export default OrderChart;