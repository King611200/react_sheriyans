import React from "react";
import {Link, Outlet} from "react-router-dom"

function User() {
  return (
    <div className="w-1/2 m-auto mt-10">
      <h1 className="text-red-600 text-5xl mb-2">User</h1>
      
      <div className =" flex w-1/2 flex-col mt-5">


        <Link className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300" to="/user/Jona">Jona</Link>
        <Link className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300" to="/user/Palak">Palak</Link>
        <Link className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300" to="/user/Rohit">Rohit</Link>
        
      </div>
      <p className="mb-2 text-zinc-500">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
        incidunt temporibus! Consequuntur laboriosam animi sed consequatur nam
        quod ipsum rerum quas dolores vel corporis tempore, odeatae, alias
        repellendus impedit molestiae eaque!
      </p>
      <button className="p-3 bg-zinc-400 rounded-md text-xl mb-4 text-white">
        Explore More
      </button>
      <hr/>
      <Outlet/>
    </div>
  );
}

export default User;
