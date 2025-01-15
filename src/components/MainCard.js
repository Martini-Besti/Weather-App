import React from 'react'

const MainCard = ({date, temp, wind, location}) => {

  return (
   
    <div className="bg-teal-300 rounded-2xl h-[40vh] w-72 justify-center shadow-xl bg-center bg-cover bg-[url('https://i.ibb.co/bm2gJPj/openart-image-UQSYglr5-1736791992891-raw.png')]">
      <div className="bg-black/50 text-white h-[100%] w-[100%] rounded-xl pt-4 pr-3 pl-5 pb-3 flex flex-col justify-between">
      
      <div id="top">
        <h4 id= "date" className="text-right font-extrabold text-md">{date}</h4>
        <h1 id= "temp" className="font-bold text-6xl text-right pt-1">{temp}&#176;C</h1>
        <h3 id= "wind" className="font-semibold text-right text-2xl">{wind} mph</h3>
    </div>
    
   <h2 id= "location" className="text-1xl text-left text-md font-semibold uppercase">{location}</h2>

   </div>
    </div>
  )
}

export default MainCard