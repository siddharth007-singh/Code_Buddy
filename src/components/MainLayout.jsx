import React from 'react'
import Sidebar from "./Sidebar"
import Content from './Content'
import RightContent from './RightContent'
import Headers from "./Header"

const MainLayout = () => {
  return (
    <>

    <div className='flex flex-row justify-between'>
        {/*sidebar*/}
        <div>
            <Sidebar/>
        </div>

        {/*Content */}
        <div>
            <Content/>
        </div>

        {/*Right Conetent*/}
        <div>
            <RightContent/>
        </div>
        
    </div>
    </>
  )
}

export default MainLayout