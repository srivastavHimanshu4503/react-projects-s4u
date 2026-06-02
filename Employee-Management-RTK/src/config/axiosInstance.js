import axios from "axios"

const config = {
	baseURL: "https://6a1ee775b79eec0d6cf04204.mockapi.io/",
    timeout: 5000, //ms
};

const api = axios.create(config);

export default api;