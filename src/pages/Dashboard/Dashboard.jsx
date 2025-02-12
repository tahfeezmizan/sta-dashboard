import React from 'react'
import DashboardHeader from './DashboardHeader/DashboardHeader'
import DashboardSummaryCards from './DashboardSummaryCards/DashboardSummaryCards'
import BarCharts from './Chars/BarCharts'
import AreaChart from './Chars/AreaChart'
import OutletStatisticsChart from './Chars/OutletStatisticsChart'
import FeedbackTable from './FeedbackTable/FeedbackTable'

export default function Dashboard() {
    return (
        <div>
            <DashboardHeader />
            <div className="w-4/5 mx-auto p-4">
                <DashboardSummaryCards />

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-6">
                    <BarCharts />
                    <AreaChart />
                    <OutletStatisticsChart />
                    <FeedbackTable />
                </div>
            </div>
        </div>
    )
}
