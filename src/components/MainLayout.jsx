import React from 'react'
import Sidebar from "./Sidebar"
import Content from './Content'
import RightContent from './RightContent'
import Headers from "./Header"

const MainLayout = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen">

    {/* Main Layout: Sidebar | Content | RightContent */}
    <div className="flex flex-1">
      {/* Sidebar */}
      <div className="w-1/4 lg:w-1/5 bg-gray-800 text-white p-4">
        <Sidebar />
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6">
        <Content />
      </div>

      {/* Right Content (Optional Section) */}
      <div className="w-1/4 lg:w-1/5 bg-gray-200 p-4 hidden lg:block">
        <RightContent />
      </div>
    </div>
  </div>
    </>
  )
}

export default MainLayout