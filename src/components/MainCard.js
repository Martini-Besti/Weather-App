import React from 'react'

const MainCard = ({date, temp, wind, location}) => {

  return (
    <div className="bg-red-500">

      <div id="top">
        <h4 id= "date" className="">{date}</h4>
        <h1 id= "temp" className="">{temp}</h1>
        <h3 id= "wind" className="">{wind}</h3>
    </div>
    
   <h2 id= "location" className="">{location}</h2>

    </div>
  )
}

export default MainCard