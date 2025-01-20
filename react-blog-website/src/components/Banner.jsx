import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight} from "react-icons/fa6";

const Banner = () => {
  return (
    <div className='px-4 py-32 bg-black mx-auto '>
        <div className='text-white text-center'>
            <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5 font-primary'>WELCOME TO OUR BLOG</h1>
            <p className='lg:w-3/5 mx-auto mb-5'>Start your blog today and join a community of coders </p>
            <div>
                <Link to="/" className=' font-medium hover:text-orange-500 inline-flex items-center'>Learn more <FaArrowRight 
                className='mt-1 ml-2'/></Link>
            </div>
        </div>
    </div>
  )
}

export default Banner