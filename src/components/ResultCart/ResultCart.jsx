import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const resultData = [
    {
      "id": 1,
      "name": "Alice",
      "Math": 85,
      "English": 78,
      "Science": 92,
      "Chemistry": 88,
      "Physics": 90
    },
    {
      "id": 2,
      "name": "Bob",
      "Math": 74,
      "English": 81,
      "Science": 69,
      "Chemistry": 70,
      "Physics": 75
    },
    {
      "id": 3,
      "name": "Charlie",
      "Math": 90,
      "English": 88,
      "Science": 94,
      "Chemistry": 91,
      "Physics": 89
    },
    {
      "id": 4,
      "name": "Diana",
      "Math": 65,
      "English": 70,
      "Science": 72,
      "Chemistry": 68,
      "Physics": 73
    },
    {
      "id": 5,
      "name": "Ethan",
      "Math": 80,
      "English": 85,
      "Science": 78,
      "Chemistry": 82,
      "Physics": 79
    },
    {
      "id": 6,
      "name": "Fiona",
      "Math": 88,
      "English": 92,
      "Science": 90,
      "Chemistry": 87,
      "Physics": 85
    },
    {
      "id": 7,
      "name": "George",
      "Math": 72,
      "English": 75,
      "Science": 70,
      "Chemistry": 74,
      "Physics": 78
    },
    {
      "id": 8,
      "name": "Hannah",
      "Math": 91,
      "English": 89,
      "Science": 95,
      "Chemistry": 93,
      "Physics": 94
    },
    {
      "id": 9,
      "name": "Ian",
      "Math": 68,
      "English": 64,
      "Science": 66,
      "Chemistry": 65,
      "Physics": 67
    },
    {
      "id": 10,
      "name": "Julia",
      "Math": 84,
      "English": 86,
      "Science": 88,
      "Chemistry": 85,
      "Physics": 87
    }
  ]
  
  
const ResultCart = () => {
    return (
        <div>
            <LineChart width={500} height={500} data={resultData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Line dataKey={'Math'} stroke='red'></Line>
                <Line dataKey={'English'} stroke='green'></Line>
                <Line dataKey={'Chemistry'} stroke='yellow'></Line>
            </LineChart>
        </div>
    );
};

export default ResultCart;