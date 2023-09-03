import React from 'react'
import Pizza from '../../assets/Single.jpg'
function Pizza() {
  return (
    <div className='w-full py-[-10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8'>
            <div className='w full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Pizza} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Tandorri chicke</h2>
                <p className='text-center text-4xl font-bold'>1500</p>
                <div>

                </div>
                <button  className="bg-[#c20404] text-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">Order now</button>
            </div>

        </div>

    </div>
  )
}

export default Pizza