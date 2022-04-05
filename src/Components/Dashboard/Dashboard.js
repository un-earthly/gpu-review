import React, { useEffect, useState } from 'react'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, RadialBar, RadialBarChart, ResponsiveContainer, Scatter, Tooltip, XAxis, YAxis } from 'recharts'
import H1 from '../Utils/H1'

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
        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-20 md:mx-20 md:mt-32 md:pb-32 m-4 mb-0 pb-5'>
            <div className='flex jusctify-center items-center flex-col'>
                <H1 classList='text-[cyan]' text='Monthly Sale' />
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                        <LineChart data={data}>
                            <Line type="monotone" dataKey="sell" stroke="#fff" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <CartesianGrid />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className='flex jusctify-center items-center flex-col'>
                <H1 text='investment revenue' classList={'text-[cyan]'} />
                <div
                    style={{ width: '100%', height: 300 }}
                >
                    <ResponsiveContainer>
                        <BarChart
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
                    </ResponsiveContainer>
                </div>
            </div>
            <div className='flex jusctify-center items-center flex-col'>
                <H1 text='Month Investment Revenue' classList={'text-[cyan]'} />
                <div
                    style={{ width: '100%', height: 300 }}
                >
                    <ResponsiveContainer>
                        <AreaChart
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
                    </ResponsiveContainer>
                </div>
            </div>

        </div >
    )
}
