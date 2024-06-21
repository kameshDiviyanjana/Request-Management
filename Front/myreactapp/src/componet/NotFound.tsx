import React from 'react'
import notfoundimagegif from '../assets/notfoundgif.gif'
interface Props{

}

const NotFound = (props : Props) => {
  return (
    <div className=' bg-white h-screen lg:flex  flex-col justify-center'>
       <div className=' text-center'>
       <h1 className=' text-center font-bold text-3xl text-gray-500'>Oops... something went wrong</h1>
       </div>
      <div className=' flex justify-center'>
      <img src={notfoundimagegif} alt='image' />
      </div>
    </div>
  )
}

export default NotFound