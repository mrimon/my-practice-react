import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const monthlySales = [
    { "month": "January", "Laptops": 120, "Phones": 300, "Tablets": 80 },
    { "month": "February", "Laptops": 150, "Phones": 280, "Tablets": 95 },
    { "month": "March", "Laptops": 170, "Phones": 310, "Tablets": 100 },
    { "month": "April", "Laptops": 200, "Phones": 330, "Tablets": 110 },
    { "month": "May", "Laptops": 180, "Phones": 320, "Tablets": 105 },
    { "month": "June", "Laptops": 190, "Phones": 340, "Tablets": 115 },
    { "month": "July", "Laptops": 210, "Phones": 360, "Tablets": 120 },
    { "month": "August", "Laptops": 220, "Phones": 370, "Tablets": 125 },
    { "month": "September", "Laptops": 230, "Phones": 390, "Tablets": 130 },
    { "month": "October", "Laptops": 240, "Phones": 400, "Tablets": 140 },
    { "month": "November", "Laptops": 250, "Phones": 420, "Tablets": 150 },
    { "month": "December", "Laptops": 260, "Phones": 430, "Tablets": 160 }
]
const MonthlySales = () => {

    return (
        <div>
            <LineChart width={500} height={500} data={monthlySales}>
                <CartesianGrid strokeDasharray="2 2"/>
                <XAxis dataKey='month'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Line dataKey={'Laptops'} stroke='tomato'></Line>
                <Line dataKey={'Phones'} stroke='green'></Line>
                <Line dataKey={'Tablets'} stroke='aqua'></Line>
            </LineChart>
        </div>
    );
};

export default MonthlySales;
