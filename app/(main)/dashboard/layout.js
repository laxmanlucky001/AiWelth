import React, { Suspense } from 'react'
import DashboardPage from './page'
import { BarLoader } from 'react-spinners'
// This is the layout for the dashboard page, which includes a title and a loading spinner for the dashboard content
const DashboardLayout = () => {
  return (
    <div className='px-5'>
      <h1 className='text-6xl font-bold gradient-title mb-5'>Dashboard</h1>
      {/* Add your dashboard content here */}
      <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea"/>}>
      <DashboardPage/>
      </Suspense>
    </div>
  )
}

export default DashboardLayout