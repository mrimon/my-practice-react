import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const MarkChart = ({marksPromise}) => {
    const marksDataRes = use(marksPromise)
    const marksData = marksDataRes.data
    console.log(marksData);

    // data processing 
    const marksChartData = marksData.map(studentData => {
        const student = {
            id: studentData.id,
            name: studentData.name,
            math: studentData.marks.Math,
            english: studentData.marks.English,
            physics: studentData.marks.Physics,
            chemistry: studentData.marks.Chemistry,
            science: studentData.marks.Science,
        }
        const avg = (student.math + student.english + student.physics + student.chemistry + student.science) / 5;
        student.avg = avg;
        return student
    })

    
    return (
        <div>
            <BarChart width={500} height={500} data={marksChartData}>
                <XAxis dataKey={'name'} stroke='tomato'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey='math' fill='blue'></Bar>
                <Bar dataKey='english' fill='green'></Bar>
                <Bar dataKey='physics' fill='orange'></Bar>
                <Bar dataKey='chemistry' fill='red'></Bar>
                <Bar dataKey='science' fill='aqua'></Bar>
            </BarChart>
        </div>
    );
};

export default MarkChart;