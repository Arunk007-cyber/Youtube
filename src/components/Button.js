import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='m-3 p-2 border border-gray-400 rounded-lg bg-gray-100 hover:bg-gray-200'>{name}</button>
    </div>
  )
}

export default Button