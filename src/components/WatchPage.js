import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    const dispatch=useDispatch();
    const [searchParams]=useSearchParams();
    

    useEffect(()=>{
        dispatch(closeMenu());
    },[])

  return (
    <div className='p-5'>
      {console.log('searchParams',searchParams.get('v'))}
        <iframe width="1200"
         height="600" 
         src={"https://www.youtube.com/embed/"+searchParams.get('v')} 
         title="YouTube video player" 
         frameBorder="0" 
         allowFullScreen="allowFullScreen"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         >   
         </iframe>


    </div>
  )
}

export default WatchPage