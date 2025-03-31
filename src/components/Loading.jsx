import React from 'react'

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-full'>
      <div className='animate-spin border-4 border-t-transparent scale-100 w-20 h-20 rounded-full '></div>
    </div>
  )
}

export default Loading
