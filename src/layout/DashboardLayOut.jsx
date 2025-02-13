import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardHeader from '../pages/Dashboard/DashboardHeader/DashboardHeader'

export default function DashboardLayOut() {
    return (
        <div>
            <DashboardHeader />
            <Outlet />
        </div>
    )
}
