# Weather App

A React-based weather application that fetches and displays weather data based on the user's location or selected city. The app provides a 7-day forecast with current weather details such as temperature, wind speed, and a summary. The user can also select a city or location to view its weather information.

## Features

- Displays current weather conditions for a given location.
- 7-day weather forecast with temperature, wind speed, and weather icon.
- Location selection to view weather in different cities.
- User-friendly and responsive design.


## Project Structure

```
C:.
└───Weather-App
    ├───public
    └───src
        ├───app
        |    └───client.js
        |    └───pages.js
        |    └───layout.js
        |    └───globals.css
        │    └───api
        │       └───weather
        |            └───route.js
        └───components
            └───Locations.js
            └───MainCard.js
            └───SmallCard.js 
```


  
## How It Works

1. **API Client**: The app uses an API client (`ApiClient`) to fetch weather data. The `getWeatherByLocation` method is called with the latitude and longitude to retrieve the weather details from the external API.

2. **State Management**: 
   - `useState` is used to manage the application state, such as weather data, city name, loading state, and error handling.
   - `useEffect` is used to trigger the `fetchWeather` function whenever the `latitude` or `longitude` changes, ensuring that the weather data is updated accordingly.

3. **Weather Data**:
   - The app shows the current weather (temperature, wind speed) along with a 7-day forecast.
   - The date is converted to a human-readable format with the help of JavaScript's `Date` object.

4. **Location Selection**:
   - The user can change the location by selecting a city from the `Locations` component, which updates the `latitude` and `longitude` state variables.

5. **Responsive Layout**:
   - The layout is responsive, using Tailwind CSS to create a mobile-first, grid-based design that adjusts for larger screens.

## Components

### `Locations`

- Provides a user interface to select a city.
- Passes the selected city's name, latitude, and longitude to the parent component to fetch weather data.

### `MainCard`

- Displays the current weather information, including the date, temperature, wind speed, and city name.

### `SmallCard`

- Displays a summary of the weather forecast for the upcoming days, including minimum and maximum temperatures and weather icons.

## API

The application fetches weather data using the OpenWeather API (or any other suitable weather API). You will need to set up your API client accordingly.

