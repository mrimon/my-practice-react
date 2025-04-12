import React from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const successData = [
    { "plan": "Basic", "price": 20, "successRate": 45 },
    { "plan": "Standard", "price": 40, "successRate": 60 },
    { "plan": "Premium", "price": 60, "successRate": 75 },
    { "plan": "Elite", "price": 80, "successRate": 85 },
    { "plan": "VIP Personal", "price": 120, "successRate": 93 }
  ]
  

const BarCart = () => {
    return (
        <div>
            <BarChart width={500} height={500} data={successData}>
                <XAxis dataKey='plan'></XAxis>
                <YAxis></YAxis>
                <Tooltip ></Tooltip>
                <Bar dataKey={"price"} fill='yellowgreen'/>
                <Bar dataKey={"successRate"} fill='green'/>
            </BarChart>
        </div>
    );
};

export default BarCart;