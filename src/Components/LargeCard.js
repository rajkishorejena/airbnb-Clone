import React from 'react'

const LargeCard = ({img,title,description,buttonText}) => {
  return (
    <section className='relative cursor-pointer py-16'>
        <div className='relative h-96 min-w-[300px] overflow-hidden'>
            <img src={img} alt="bigCard" className='object-cover rounded-2xl'/>
        </div>
        <div className='absolute top-32 left-12'>
            <h3 className='text-4xl mb-4 w-64'>{title}</h3>
            <p>{description}</p>
            <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5'>{buttonText}</button>
        </div>
    </section>
  )
}

export default LargeCard