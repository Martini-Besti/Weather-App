"use client";
import { useEffect, useState } from "react";
import { ApiClient } from "./client";

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
    console.log(weather)
  }, [weather])

  return (
    <div className="max-w-7xl mx-auto">
      {loading && <div>Loading...</div>}
      {error && <div>There was an error</div>}
      <div className="text-center">
        <h1 className="font-bold text-4xl">Weather</h1>
      </div>
      <div>
      
        {/* <select
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
        >
          <option value="">All Nationalities</option>
          {nationalities.map((nat) => {
            return (
              <option key={nat} value={nat}>
                {nat}
              </option>
            );
          })}
        </select>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">All Genders</option>
          <option value={"male"}>Male</option>
          <option value={"female"}>Feale</option>
        </select> */}

            {/*
            {weather.current} {" "}
            <img src={weather.daily} />{" "}
            */}

          {/*

         {weather.map((weather, index) => {
        return (
          <div key={index}>
            {weather.current.temp} {" "}
            <img src={weather.daily.weather.icon} />{" "}
          </div>
        );
      })}

      */}      
     

        <div>{
            weather?.daily?.map(item => {
              return <div>{item.moonset}</div>
            })
          }</div>

           <div> {weather.current.temp}
          </div>
          
      </div> 
     
    </div>
  );
}