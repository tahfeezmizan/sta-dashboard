import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";

const data = [
    { name: "Jan", outlets: 400 },
    { name: "Feb", outlets: 900 },
    { name: "Mar", outlets: 800 },
    { name: "Apr", outlets: 1100 },
    { name: "May", outlets: 1000 },
    { name: "Jun", outlets: 950 },
    { name: "Jul", outlets: 1300 },
    { name: "Aug", outlets: 1200 },
    { name: "Sept", outlets: 1500 },
    { name: "Oct", outlets: 1800 },
    { name: "Nov", outlets: 1700 },
    { name: "Dec", outlets: 2000 },
];
export default function OutletStatisticsChart() {
    const [year, setYear] = useState("2024");

    return (
        <div>
            {/* Top Section */}
            <div className="flex justify-between items-center pb-4">
                <h2 className="text-xl font-semibold">Total Outlet statistics</h2>
                {/* Year Dropdown */}
                <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="border rounded-lg p-1 cursor-pointer"
                >
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                </select>
            </div>

            {/* Line Chart */}
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                    <CartesianGrid stroke="#E0E0E0" strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={(value) => `${value / 1000}k`} />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="outlets"
                        stroke="#795548" // Brown line color
                        strokeWidth={2}
                        dot={{ fill: "green", r: 4 }} // Green dots on data points
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};