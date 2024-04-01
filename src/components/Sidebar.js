import React from 'react'
import {useSelector } from 'react-redux'



function Sidebar({sidebarHdata}) {
    const open = useSelector((store) => store.app.open);
    

  return (
    <div className={`relative left-0  ${open?"w-[20%]":"w-[6%]"} p-5 mr-2 h-[calc(100vh-8rem)] bg-white  overflow-y-scroll overflow-x-hidden`}>
        {
            sidebarHdata?.map((item ) => {
            
                return(
                    <div key={item.id} className='flex my-3'>
                    {item.icon} 
                    <p className={`ml-4 ${open ? "": "hidden"}`}>{item.title}</p>
                    </div>
                )
            })
        }
      
    </div>
  )
}

export default Sidebar
