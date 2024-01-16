import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SUGGESTION_API } from '../utils/Constant';

const Header = () => {
  const [searchQuery,setSearchQuery]=useState("");
  const [suggestion,setSuggestion]=useState([]);
  const [showsuggestion,setShowSuggestion]=useState(false)
  

useEffect(()=>{
  const timer=setTimeout(()=>{
    getShowSuggestion();
  },200)

  return ()=>{
    clearInterval(timer);
  }

},[searchQuery]);

  const getShowSuggestion=async()=>{
    try {

      const data=await fetch(YOUTUBE_SUGGESTION_API+searchQuery);
    
      const json=await data.json();
      setSuggestion(json[1]);
      console.log('json',json); 
  
      
    } catch (error) {
        console.log('error',error);
    }
   
  }

  const dispatch=useDispatch();
  const toggleMenuSideBar=()=>{
    // console.log('togglemenu',toggleMenu);
    dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-flow-col shadow-md '>
      <div className='col-span-1 flex'>
        <img className='h-8 m-4 cursor-pointer'
        onClick={()=>toggleMenuSideBar()} 
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFtEcAe9N_sjl6Qx6IACCQ5RPVYMIoMSOY-VzN7-Okffg9oS9ubBg0AvXdMFEJWJA6Zdo&usqp=CAU' 
        alt='hamburger' />

        <a href='/'>
        <img className='h-16' 
         src='https://img.freepik.com/premium-photo/youtube-logo-video-player-3d-design-video-media-player-interface_41204-12379.jpg' alt='yt'/>
         </a>
      </div>

      <div className='col-span-10 px-10 m-3'>
        <div>
        <input className= ' px-5 w-1/2 border border-gray-400 p-2 rounded-l-full'
         type='text'
         value={searchQuery}
         onChange={(e)=>setSearchQuery(e.target.value)}
         onFocus={()=>setShowSuggestion(true)}
         onBlur={()=>setShowSuggestion(false)}
         />
        <button className='border border-gray-400 p-2 rounded-r-full'>Search</button>
        </div>
       {showsuggestion  && (<div className='fixed bg-white p-2 mx-2 w-[40.5rem] rounded-lg shadow-lg border border-gray-100'>
          <ul>
            {suggestion.map((s)=><li className='py-2 shadow-sm hover:bg-gray-50'>{s}</li>)}
       
          </ul>
        </div>)}
      </div>

      <div className='col-span-1'>
        <img className='h-9 m-4' src="https://w7.pngwing.com/pngs/215/58/png-transparent-computer-icons-google-account-scalable-graphics-computer-file-my-account-icon-rim-123rf-symbol-thumbnail.png" alt='account' />
      </div>

    </div>
  )
}

export default Header