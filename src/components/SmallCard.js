import React from "react";
import Image from "next/image";

const SmallCard = ({ day, minTemp, maxTemp, icon, summary }) => {
  return (
    <div
      className="bg-cyan-800 rounded-2xl w-72 shadow-xl bg-center bg-cover
    rounded-xl my-2 p-6 pt-4 pr-3 pb-3 flex flex-row justify-center text-white"
    >

      <div id="">

        <h4 id="day" className="text-left font-bold text-md mt-1">
          {day}
        </h4>
        <p id="minmaxtemp" className="font-normal text-md text-left mb-2">
          <span id="minTemp">{minTemp}&#176;C</span> -{" "}
          <span id="maxTemp">{maxTemp}&#176;C</span>{" "}
        </p>
        <p id="summary" className="font-normal text-left
      text-pretty text-sm mb-4">
          {summary}
        </p>

      </div>

      <img
  src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
  width={100}
  height={100}
  style={{ objectFit: "contain" }}
  alt={`weather icon showing ${summary}`}
/>

    </div>
  );
};

export default SmallCard;
