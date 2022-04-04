import React, { useEffect, useState } from 'react'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, RadialBar, RadialBarChart, ResponsiveContainer, Scatter, Tooltip, XAxis, YAxis } from 'recharts'

export default function Dashboard() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(res => setData(res))
    })
    const style = {
        top: '50%',
        right: 0,
        transform: 'translate(0, -50%)',
        lineHeight: '24px',
    };
    return (
        <div className='grid grid-cols-2 gap-20 mx-20 mt-32 pb-32'>
            <div>
                <h1 className='text-3xl my-3 text-center'> Mothly Sale</h1>
                <LineChart width={600} height={400} data={data}>
                    <Line type="monotone" dataKey="sell" stroke="#fff" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid />
                </LineChart>
            </div>
            <div>
                <h1 className='text-3xl my-3 text-center capitalize'> investment revenue</h1>

                <BarChart
                    width={600}
                    height={400}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="sell" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                </BarChart>


            </div>
            <div>
                <h1 className='text-3xl my-3 text-center'>Month Investment Revenue</h1>

                <AreaChart
                    width={600}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="revenue" stroke="#8884e8" fill="#8884e8" />
                </AreaChart>
            </div>

        </div >
    )
}
