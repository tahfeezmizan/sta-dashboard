import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
    { name: "Jan", appUsers: 1200, activeUsers: 900 },
    { name: "Feb", appUsers: 2000, activeUsers: 1800 },
    { name: "Mar", appUsers: 2300, activeUsers: 2200 },
    { name: "Apr", appUsers: 3000, activeUsers: 2800 },
    { name: "May", appUsers: 3800, activeUsers: 3200 },
    { name: "Jun", appUsers: 4000, activeUsers: 2800 },
    { name: "Jul", appUsers: 3500, activeUsers: 3300 },
    { name: "Aug", appUsers: 3200, activeUsers: 2900 },
    { name: "Sept", appUsers: 2500, activeUsers: 2300 },
    { name: "Oct", appUsers: 2900, activeUsers: 2800 },
    { name: "Nov", appUsers: 3400, activeUsers: 3200 },
    { name: "Dec", appUsers: 5000, activeUsers: 4500 },
];

const BarCharts = () => {
    const [year, setYear] = useState("2024");

    return (
        <div className="bg-white">
            {/* Top Section */}
            <div className="flex justify-between items-center border-b pb-4">
                <h2 className="text-xl font-semibold">Total users statistics</h2>

                {/* Legend */}
                <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                        <span className="w-3 h-3 bg-pink-500 rounded-full mr-2"></span>
                        <span>App user</span>
                    </div>
                    <div className="flex items-center">
                        <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                        <span>Active</span>
                    </div>

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
            </div>

            {/* Bar Chart */}
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="appUsers" fill="#e91e63" name="App user" />
                    <Bar dataKey="activeUsers" fill="#2ecc71" name="Active" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};


export default BarCharts;
