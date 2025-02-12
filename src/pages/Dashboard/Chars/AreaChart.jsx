import React, { useState } from "react";
import { AreaChart as RechartsAreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { name: "Jan", earnings: 10000 },
    { name: "Feb", earnings: 30000 },
    { name: "Mar", earnings: 50000 },
    { name: "Apr", earnings: 60000 },
    { name: "May", earnings: 55000 },
    { name: "Jun", earnings: 40000 },
    { name: "Jul", earnings: 30000 },
    { name: "Aug", earnings: 35000 },
    { name: "Sept", earnings: 45000 },
    { name: "Oct", earnings: 60000 },
    { name: "Nov", earnings: 70000 },
    { name: "Dec", earnings: 80000 },
];

export default function EarningsChart() {  // Renamed function
    const [year, setYear] = useState("2025");

    return (
        <div>
            {/* Top Section */}
            <div className="flex justify-between items-center border-b pb-4">
                <h2 className="text-xl font-semibold">Total earning growth</h2>
                {/* Year Dropdown */}
                <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="border rounded-lg p-1 cursor-pointer"
                >
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                </select>
            </div>

            {/* Area Chart */}
            <ResponsiveContainer width="100%" height={300}>
                <RechartsAreaChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#e91e63" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#e91e63" stopOpacity={0.1} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={(value) => `${value / 1000}k`} />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="earnings"
                        stroke="#000"
                        strokeWidth={2}
                        fill="url(#colorEarnings)"
                    />
                </RechartsAreaChart>
            </ResponsiveContainer>
        </div>
    );
};
