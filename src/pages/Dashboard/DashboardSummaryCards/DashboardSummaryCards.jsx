import React from 'react';
import { FaUsers, FaStore, FaChartLine } from 'react-icons/fa';

const stats = [
    {
        icon: <FaUsers className="text-pink-500 text-3xl" />,
        title: 'Total User',
        value: '20.10K'
    },
    {
        icon: <FaStore className="text-pink-500 text-3xl" />,
        title: 'Total Outlet',
        value: '920'
    },
    {
        icon: <FaChartLine className="text-pink-500 text-3xl" />,
        title: 'Total Earning',
        value: '150.10K'
    }
];

const DashboardSummaryCards = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-5 pt-4">
            {stats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-100 p-10 rounded-sm">
                    <div className="flex items-center space-x-4">
                        <div className="bg-white p-3 rounded-full">
                            {stat.icon}
                        </div>
                        <span className="text-lg font-semibold text-gray-700">{stat.title}</span>
                    </div>
                    <span className="text-2xl font-bold text-pink-500">{stat.value}</span>
                </div>
            ))}
        </div>
    );
};

export default DashboardSummaryCards;
