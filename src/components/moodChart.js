import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function MoodChart(props) {
  const chartMoodTable = props.tableMood.map((element) => {
    const [dataBezGodziny] = element.date.split("T");
    return {
      ...element,
      date: dataBezGodziny,
    };
  });

  return (
    <LineChart
      width={1200}
      height={250}
      data={chartMoodTable}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="linear" dataKey="moodValue" stroke="#8884d8" />
    </LineChart>
  );
}
