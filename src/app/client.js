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

    async getWeather() {
        return this.getRequest("");
    }

   
    
    //FINISH IF HAVE TIME TO PUT IN DROPDOWN
    // async getWeatherByLocation({longitude, latitude}) {
    //     const params = { results: 10};
    //     if (nationality) params.nat = nationality;
    //     if (gender) params.gender = gender;
    //     return this.getRequest("", params);
    // }

   
    //filtering weather data by date
    async getWeatherByFilters({day}) {
        const params = { results: 10};
        if (day) params.day = date;
        return this.getRequest("", params);
    }

}