import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import Card from "./Component/Card";

function App() {
  const data = [
    {
      images:
        "https://images.unsplash.com/photo-1708791416184-fe5f5ed40bad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Jerry Wang",
      artist: "Designer",
      added: false,
    },
    {
      images:
        "https://images.unsplash.com/photo-1710390916960-3047fcdf561e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Hitesh",
      artist: "Dancer",
      added: false,
    },
    {
      images:
        "https://images.unsplash.com/photo-1709603475135-bf0e03aa479c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Palak",
      artist: "Shubh",
      added: false,
    },
    {
      images:
        "https://images.unsplash.com/photo-1683735669803-2cf67a3edda5?q=80&w=1391&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Amit",
      artist: "Shrishti",
      added: true,
    },
  ];

  const [songdata,setsongdata]=useState(data)
  
  const handelclick = (index)=>{
    setsongdata((prev)=>{
      return prev.map((item,itemindex)=>{
        if(itemindex === index) return{...item, added: !item.added}
        return item;
      })
    })
  }

  return (
    <div>
      <div className="w-full h-screen bg-zinc-200">

        <Navbar data ={songdata}/>

        <div className="px-20 flex gap-10 mt-10 flex-wrap">
          {songdata.map((obj,index) => (
          <Card data ={obj} handelclick={handelclick} index={index} key={index}/>
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;
