import React from 'react'
import BeverageImg from '../assets/menupizza.jpg'
function Beverages() {
  return (
    <div className="beverages w-full h-screen bg-black py-16 px-4 opacity-0">
    <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
      {/* <img className="w-[500px] mx-auto my-4" src={BeverageImg} alt="/" /> */}
      <div className=" justify-center">
        <p className="text-[#c20404] uppercase font-bold">Menu of the Pizzashop</p>
        <h1 className="text-white md:text-4xl sm:text-3xl text-2xl font-bold py-2">Chosse what ever u want</h1>
        <p className='text-white'>
          habdaudhaw fuck dont eat pizza Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Ipsa, cumque consequuntur. Reiciendis,
          ducimus! Expedita, adipisci, hic voluptatum repellat, est voluptate
          odit voluptates cum ad excepturi magnam quisquam soluta natus
          voluptas.
        </p>
        <button className="bg-[#c20404] text-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">Go to Menu</button>
      </div>
    </div>
  </div>
  )
}

export default Beverages