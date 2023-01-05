import React from 'react'
import img1 from "../public/img1.jpg"
import img2 from "../public/img2.jpg"
import img3 from "../public/img3.jpg"
import img4 from "../public/img4.jpg"
import img5 from "../public/img5.jpg"
import img6 from "../public/img6.jpg"
import img7 from "../public/img7.jpg"
import Instagraming from './Instagraming'

const Instagram = () => {
  return (
    <div className='max-w-[1240px] text-center mx-auto py-24'>
        <p  className='text-2xl font-bold'>Follow me on Instagram</p>
        <p className='pb-4'>@Captur</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <Instagraming socialImage={img1} />
            <Instagraming socialImage={img2} />
            <Instagraming socialImage={img3} />
            <Instagraming socialImage={img4} />
            <Instagraming socialImage={img5} />
            <Instagraming socialImage={img6} />
            <Instagraming socialImage={img7} />

        </div>
    </div>
  )
}

export default Instagram