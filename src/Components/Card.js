import React from 'react'







const Card = ({image,text}) => {
   
  return (
    <div className='relative p-3'>
        <img className='brightness-50 hover:brightness-100 w-[100%] h-[100%]' src={image} alt="" />
        <h1 className='absolute text-2xl font-bold p-3 text-white  bottom-5 left-5'>{text}</h1>
    </div>
  )
}

export default Card