import { React, useState,  } from '@libs/vendors'

import {
  Sidebar, Header
} from '@libs/partials'


export const DashboardLayout = ({children}) => {

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
          {children}
        </main>

      </div>

    </div>
  )
}

