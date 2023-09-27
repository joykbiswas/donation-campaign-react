/* eslint-disable react/prop-types */

import  { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const RADIAN = Math.PI / 180;

const CustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Statistics = () => {
  const [apiData, setApiData] = useState([]);
  const [localData, setLocalData] = useState([]);

  useEffect(() => {
    
    fetch('/donation.json')
      .then(res => res.json())
      .then(data => setApiData(data));

    
    const localData = JSON.parse(localStorage.getItem('donations'));
    setLocalData(localData);
  }, []);

  const apiDataLength = apiData.length;
  const localDataLength = localData.length;
  
    
  const apiDataPercentage = localDataLength === 0 ? 100 : ((apiDataLength - localDataLength)) * 100;
  const localDataPercentage = (localDataLength) * 100;

  
  const chartData = [
    { name: "API Data", value: apiDataPercentage },
    { name: "Local Data", value: localDataPercentage },
  ];

  const totalDonation=Math.round((apiDataPercentage/1200)*100)
  const donation =Math.round((localDataPercentage/1200)*100)

   const options = {
    title: "My Daily Activities",
    
  };

  return (
    <div className="">
      <h2 className="text-xl">Your Donation:{donation}%</h2>
      <h2 className="text-xl">Total Donation:{totalDonation}%</h2>

      <div className=" ml-32">
      <PieChart width={400} height={400}>
        <Pie 
          data={chartData}
          cx={200}
          cy={200}
          options={options}
          labelLine={false}
          label={CustomizedLabel}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          
        </Pie>
      </PieChart>
      </div>
    </div>
  );
};


export default Statistics;
