import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const ResultDisplay = ({ data }) => {
  // Convert data to chart-friendly format
  const chartData = data.labels.map((label, index) => ({
    name: label,
    value: data.values[index],
  }));

  return (
    <div className="mt-6 flex flex-col items-center">
      <h3 className="text-2xl p-4 text-center font-semibold mb-4">Query Results</h3>
      
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
