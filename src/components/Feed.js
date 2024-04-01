import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const Feed = () => {
    const btnlist = {
        items:["All","Music","Songs", "Vlogs", "Films","JavaScript","Coding","AI","Ml", "Educational","Bhakti","Bhojpuri_Song","Motu_Patlu","Commedy","Music","Cartoon","Shorts","Punjabi_Song","Java","Recepies", ]
      }
  return (
    <div className='ml-5 mr-5 w-[80%]'>
      <ButtonList btnlist={btnlist}/>
      <VideoContainer/>
    </div>
  )
}

export default Feed
