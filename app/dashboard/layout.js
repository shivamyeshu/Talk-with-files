import Header from './_component/Header'
import Sidebar from './_component/Sidebar'
import React from 'react'

function DashboardLayout({children}) {
  return (
    <div>
        <div className='md:w-64 h-screen fixed'>
            <Sidebar/>
        </div>
        <div className='md:ml-64 h-screen '>
          <Header/>
           <div>
            {children}
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout