import React from 'react'
import ChatMessage from './ChatMessage'
import {  useSelector } from 'react-redux'

const LiveChat = () => {

  const message = useSelector((store) => store.chat.message)
  return (
    <div className='px-4 py-1'>
        <div>
          {
            message.map((item ,idx)=>{
              return (
                <ChatMessage key={idx} item={item}/>
              )
            })
          }
            
        </div>
    </div>
  )
}

export default LiveChat
