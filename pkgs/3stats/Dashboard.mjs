import { React, useState } from '@libs/vendors'

import {
  Sidebar, Header
} from '@libs/partials'

import {
  DropdownFilter,
  Datepicker,
} from '@libs/components'

import { AnalyticsCard01 } from './cards/AnalyticsCard01'
import { AnalyticsCard02 } from './cards/AnalyticsCard02'


export const DashboardPage = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">Analytics ✨</h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">


                <DropdownFilter align="right" />

                {/* Datepicker built with flatpickr */}
                <Datepicker align="right" />

              </div>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">

              {/* Line chart (Analytics) */}
              <AnalyticsCard01 />
              {/*  Line chart (Active Users Right Now) */}
              <AnalyticsCard02 />
              {/* Stacked bar chart (Acquisition Channels) */}


            </div>

          </div>
        </main>

      </div>

    </div>
  )
}

