import React from 'react'
import Card from './Card'
import maldives from '../assets/maldives.jpg'
import borabora from '../assets/borabora.jpg'
import keywest from '../assets/keywest.jpg'
import maldives2 from '../assets/maldives2.jpg'
import borabora2 from '../assets/borabora2.jpg'
import maldives3 from '../assets/maldives3.jpg'


const Cards = () => {
  return (
    <>
    <div className='mb-5 md:p-14'>
    <h1 className='my-10 text-center text-4xl font-semibold'>Gallery</h1>
<div className=' w-full grid grid-cols-1 md:grid-cols-3  '>
   <Card  image={borabora} text='Bora Bora'  />
   <Card image={borabora2}  text='Maldives' />
   <Card  image={maldives3} text='Antigua' />
   <Card   image={keywest} text='Cozumel' />
   <Card image={maldives}   text='jamaica' />
   <Card  image={maldives2}   text='Key West' />
</div>
</div>
</>
  )
}

export default Cards