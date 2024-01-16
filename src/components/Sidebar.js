import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const isMenuOpen=useSelector(store=>store.app.isMenuOpen);
    if(!isMenuOpen){
            return null;
    }
    
  return (
    <div className='p-5 shadow-lg '>
        <ul>
          <li className='mb-1 hover:bg-gray-200 rounded-lg '><Link to="/">Home</Link></li>
          <li className='mb-1 hover:bg-gray-200 rounded-lg'>Shorts</li>
          <li className='hover:bg-gray-200'>Subscription</li>
          <hr className='mt-5'/>
        <li className='mb-1 hover:bg-gray-200 rounded-lg'>Library</li>
        <li className='mb-1 hover:bg-gray-200 rounded-lg'>History</li>
        <li className='mb-1 hover:bg-gray-200 rounded-lg'>Your Videos</li>    
        <li className='mb-1 hover:bg-gray-200 rounded-lg'>Watched</li>    
        <li className='mb-1 hover:bg-gray-200 rounded-lg '>Liked</li>
        <hr className='mt-5'/>

        <h1 className='mb-1 font-bold'>Explore</h1>
        <li className='mb-1 hover:bg-gray-200 rounded-lg'>Trending</li>
        <li className='mb-1 hover:bg-gray-200 rounded-lg'>Shoping</li>
        <li className='mb-1 hover:bg-gray-200 rounded-lg'>Music</li>
        <li className='mb-1 hover:bg-gray-200 rounded-lg'>Films</li>
        <li className='mb-1 hover:bg-gray-200 rounded-lg'>Live</li>
        <li className='mb-1 hover:bg-gray-200 rounded-lg'>Gaming</li>
        <li className='mb-1 hover:bg-gray-200 rounded-lg'>News</li>
        <li className='mb-1 hover:bg-gray-200 rounded-lg'>Sports</li>
        <li className='mb-1 hover:bg-gray-200 rounded-lg'>Learning</li>
        <li className='mb-1 hover:bg-gray-200 rounded-lg'>Podcast</li>


        </ul>
    </div>
  )
}

export default Sidebar