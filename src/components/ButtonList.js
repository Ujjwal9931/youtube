import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCategory } from '../utils/appSlice';

const ButtonList = ({btnlist}) => {
  const [active , setActive] = useState("All")
  const dispatch = useDispatch();

  const videoByTag = (tag) =>{
    if(active !== tag){
      setActive(tag)
      dispatch(setCategory(tag))
    }
  }
  return (
    <div className=' flex w-full overflow-x-scroll py-2 no-scrollbar my-1 '>
    {
        btnlist?.items?.map((item , index) =>{
             return(
              <div key={index}>
                  <button onClick={()=>{videoByTag(item)}} className={` ${active === item ? "bg-slate-900 text-white":"bg-gray-300"}  px-4 py-1 font-medium rounded-lg ml-2`}>{item}</button>
              </div>
             ) 
        })
    }
    </div>
  )
}

export default ButtonList
