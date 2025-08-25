import React from "react";

function Card({ data ,handelclick ,index}) {

  const { name, images, artist, added } = data;

  return (

    <div className="w-60 p-4 bg-white rounded-md flex gap-3 pb-8 relative mt-10">
      <div className="w-20 h-20 bg-orange-400 rounded-md overflow-hidden">
        <img className="w-full h-full object-cover " src={images} alt="" />
      </div>
      <div className="">
        <h3 className="text-xl leading-none font-semibold">{name}</h3>
        <h6 className="text-sm">{artist}</h6>
      </div>
      <button onClick={()=>handelclick(index)} className={`px-4 py-3 ${added ? "bg-teal-400" : "bg-orange-500"} absolute whitespace-nowrap text-white text-xs rounded-full bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%]`}>
        {added === false ? "Add to Favourites" : "Added"}
      </button>

    </div>

  );
}

export default Card;
