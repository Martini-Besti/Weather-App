"use client";
import { useEffect, useState } from "react";
import { ApiClient } from "./client";

import MainCard from "@/components/MainCard";
import SmallCard from "@/components/SmallCard";

const longitude = 51.51;
const latitude = 0.12;

export default function Home() {
  const client = new ApiClient();

  //array for all users to display
  const [weather, setWeather] = useState({});
  const [maxTemp, setMaxTemp] = useState(0);
  const [nationality, setNationality] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    setLoading(true);

    try {
      const response = await client.getWeather();
      setWeather(response);
      console.log(response);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  useEffect(() => {
    console.log(weather);
  }, [weather]);

  if (loading) {
    return <div>Loading...</div>;
  }

  //getting time data from API and converting to human-readable date & day of the week
  var date = new Date(weather?.current?.dt * 1000);
  const allDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const dateText = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${allDays[date.getDay() - 1]}`;

  
  //getting time data from API and converting to human-readable date & day of the week
 
   

  return (
    <div className="max-w-7xl mx-auto">
      {error && <div>There was an error</div>}
      <div className="text-center">
        
      </div>
      <div>

      <main className="pt-4 w-[100vw] flex flex-col items-center bg-cyan-500">
      <MainCard 
        date={dateText}
        temp={parseInt(weather?.current?.temp)} 
        wind={weather?.current?.wind_speed}
        location={weather?.timezone?.split("/")[1]}
      />
      
        <div>

          {weather?.daily?.map((item, index) => {
             var day = new Date(item.dt * 1000);
             const dayText = `${allDays[day.getDay()]}`;
            return <SmallCard 
            key={index} 
            icon={item.weather[0].icon}
            minTemp={parseInt(item.temp.min)}
            maxTemp={parseInt(item.temp.max)}
            summary={item.summary}
            day={dayText}
            
           />

          })}

        </div>
        
      </main>

        {/* //<div> {weather?.current?.temp}</div> */}
      </div>
    </div>
  );
}
