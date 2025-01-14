import axios from "axios";

export class ApiClient {

    async responseStatusCheck(responseObject) {
        if (responseObject.status >= 200 && responseObject.status < 300) {
            return responseObject.data;
        }

        throw new Error(responseObject.statusText);
    }

    //params = {} means return an empty object of no paramaters
    async getRequest(endpoint, params = {}) {
        try {
            const response = await axios.get("/api/weather", {params})
            return this.responseStatusCheck(response);
        } catch (error) {
            console.log(error);
            throw error;
        }

    }


    async getUSers() {
        return this.getRequest("", { results: 10 });
    }

    async getUsersByNationality(nat) {
        return this.getRequest("", { nat, results: 10});
    }

    async getUsersByGender(gender) {
        return this.getRequest("", {
            gender,
            results: 10,
        });
    }

    async getUsersByFilters({nationality, gender}) {
        const params = { results: 10};
        if (nationality) params.nat = nationality;
        if (gender) params.gender = gender;
        return this.getRequest("", params);
    }

    async getUsers() {
        return this.getRequest("", { results: 10 });
    }

    async getUsersByNationality(nat) {
        return this.getRequest("", { nat, results: 10});
    }

    async getUsersByGender(gender) {
        return this.getRequest("", {
            gender,
            results: 10,
        });
    }

    async getUsersByFilters({nationality, gender}) {
        const params = { results: 10};
        if (nationality) params.nat = nationality;
        if (gender) params.gender = gender;
        return this.getRequest("", params);
    }

}