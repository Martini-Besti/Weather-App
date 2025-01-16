"use client";
import { useEffect, useState } from "react";
import { ApiClient } from "./client";

import Locations from "@/components/Locations";
import MainCard from "@/components/MainCard";
import SmallCard from "@/components/SmallCard";

export default function Home() {
  
  const client = new ApiClient();

  //array for all users to display
  const [weather, setWeather] = useState({});
  const [maxTemp, setMaxTemp] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [latitude, setLatitude] = useState("51.51");
  const [longitude, setLongitude] = useState("0.12");
  const [cityName, setCityName] = useState("London");

  async function changeLocation(name, lat, lon) {
    setCityName(name);
    setLatitude(lat);
    setLongitude(lon);
  }

  // also could pass  them to fetchWeather here too

  const fetchWeather = async () => {
    setLoading(true);

    try {
      // pass here to getWeather the latitude and longitude
      const response = await client.getWeatherByLocation(latitude, longitude);
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
  }, [latitude, longitude]);

  if (loading) {
    return <div>Loading...</div>;
  }

  //getting time data from API and converting to human-readable date & day of the week
  var date = new Date(weather?.current?.dt * 1000);
  const allDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const dateText = `${date.getDate()}.${
    date.getMonth() + 1
  }.${date.getFullYear()} ${allDays[date.getDay() - 1]}`;

  //getting time data from API and converting to human-readable date & day of the week

  return (
    <div className=" mx-auto">
      {error && <div>There was an error</div>}
      <div className="text-center"></div>
      <div>

        <main className="pt-4 w-[100vw] flex flex-col items-center bg-cyan-500">

        <Locations
          changeLocationFunction={(name, lat, lon) => {
            changeLocation(name, lat, lon);
          }}
        />

          <MainCard
            date={dateText}
            temp={parseInt(weather?.current?.temp)}
            wind={weather?.current?.wind_speed}
            location={cityName}
          />

          <div>
            {weather?.daily?.map((item, index) => {
              var day = new Date(item.dt * 1000);
              const dayText = `${allDays[day.getDay()]}`;
              return (
                <SmallCard
                  key={index}
                  icon={item.weather[0].icon}
                  minTemp={parseInt(item.temp.min)}
                  maxTemp={parseInt(item.temp.max)}
                  summary={item.summary}
                  day={dayText}
                />
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
