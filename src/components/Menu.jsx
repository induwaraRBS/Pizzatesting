import React from "react";
import Menuimg from "../assets/menupizza.jpg";
function Menu() {
  return (
    <div className="menu w-full h-screen bg-white py-[-20] px-3 opacity-0">
      <div className=" max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className=" justify-center">
          <p className="text-[#c20404] uppercase font-bold">Menu of the Pizzashop</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-3">Chosse what ever u want</h1>
          <p >
            habdaudhaw fuck dont eat pizza Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Ipsa, cumque consequuntur. Reiciendis,
            ducimus! Expedita, adipisci, hic voluptatum repellat, est voluptate
            odit voluptates cum ad excepturi magnam quisquam soluta natus
            voluptas.
          </p>
          
          <button className="bg-black text-[#c20404] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">Go to Menu</button>
        </div>
        {/* <img className="w-[500px] mx-auto my-6" src={Menuimg} alt="/" /> */}
      </div>
    </div>
  );
}

export default Menu;
