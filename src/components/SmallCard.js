import React from 'react'
import Image from 'next/image'

const SmallCard = ({day, minTemp, maxTemp, icon, summary}) => {

  return (
   
    <div className="bg-teal-300 rounded-2xl h-[10vh] w-72 justify-center shadow-xl bg-center bg-cover">
      <div className="bg-black/50 text-white h-[100%] w-[100%] rounded-xl pt-4 pr-3 pl-5 pb-3 flex flex-row justify-between">
      <div id="icon" className=""></div>
      <Image src={`https://openweathermap.org/img/wn/${icon}@2x.png`} width="200" height="200" alt={`weather icon showing ${summary}`}/>
      <div id="top">
        <h4 id= "day" className="text-right font-bold text-md">{day}</h4>
        <p id= "minmaxtemp" className="font-normal text-md text-right pt-1">(<span id="minTemp">{minTemp}&#176;C</span> - <span id="maxTemp">{maxTemp}&#176;C</span>) </p>
        <p id= "summary" className="font-normal text-right text-sm">{summary}</p>
    </div>

   </div>
    </div>
  )
}

export default SmallCard