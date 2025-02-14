import React from 'react'
import AreaChart from './Chars/AreaChart'
import BarCharts from './Chars/BarCharts'
import OutletStatisticsChart from './Chars/OutletStatisticsChart'
import DashboardSummaryCards from './DashboardSummaryCards/DashboardSummaryCards'
import FeedbackTable from './FeedbackTable/FeedbackTable'

export default function Dashboard() {

    return (
        <div>
            <div className="md:w-4/5 mx-auto w-full p-4">
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
