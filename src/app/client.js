import axios from "axios";

export class ApiClient {

    async responseStatusCheck(responseObject) {
        if (responseObject.status >= 200 && responseObject.status < 300) {
            return responseObject.data;
        }

        throw new Error(responseObject.statusText);
    }

    //params = {} means return an empty object of no paramaters
    async getRequest(_arg, params = {}) {
        try {
            const response = await axios.get("/api/weather", {params})
            return this.responseStatusCheck(response);
        } catch (error) {
            console.log(error);
            throw error;
        }

    }

    // accept in latitude and longitude as parameters for getWeather
    // pass them to get request as second argument of getRequest function
    async getWeather() {
        return this.getRequest("");
    }
    
    //Drop down list of locations
    async getWeatherByLocation(latitude, longitude) {
        
        console.log("lon/lat:", latitude, ":", longitude);

        let params = { results: 10 };
        if (longitude) params.lon = longitude;
        if (latitude) params.lat = latitude;

        return this.getRequest("", params);
    }

    //filtering weather data by date
    async getWeatherByFilters({day}) {
        //
        const params = { results: 10};
        if (day) params.day = date;
        return this.getRequest("", params);
    }

}