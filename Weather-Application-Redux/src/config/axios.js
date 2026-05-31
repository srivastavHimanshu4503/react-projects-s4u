import axios from "axios";

const config = {
	baseURL: "https://api.openweathermap.org/data/2.5",
    timer: 5000, //ms
};

export const api = axios.create(config);