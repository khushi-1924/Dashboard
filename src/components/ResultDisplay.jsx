import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useDispatch, useSelector } from "react-redux";

const ResultDisplay = ({ data }) => {
  const { history } = useSelector((state) => state.query);
  // Convert data to chart-friendly format
  const chartData = data.labels.map((label, index) => ({
    name: label,
    value: data.values[index],
  }));

  return (
    <div className="mt-6 flex flex-col items-center">
      <h3 className="text-2xl p-1 text-center font-semibold mb-1">Showing Results for</h3>
      <h1 className="text-xl p-1 text-center mb-4">{history[0]}</h1>
      
      <ResponsiveContainer width="70%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#74c69d" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResultDisplay;
