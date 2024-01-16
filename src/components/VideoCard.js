import React from 'react'

const VideoCard = ({info}) => {
    console.log('info',info)
    if(!info){
        return;
    }
   const {snippet,statistics}=info;
   const {title,thumbnails,channelTitle}=snippet;

    return (
    <div className='h-50 p-2 m-2 w-80 shadow-lg'>
        <img src={thumbnails.medium.url}
        className='rounded-lg'
        alt='thumbnail'
         />
         <ul>
            <li className='font-bold py-2'>{title}</li>
            <li className=''>{channelTitle}</li>
            <li>{statistics.viewCount} views |</li>
         </ul>
    </div>
  )
}

export default VideoCard