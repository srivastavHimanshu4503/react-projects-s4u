import { useContext } from "react";
import { NewsContext } from "./context/NewsContext";
import api from "./config/axiosConfig.js";

const useNewsContext = () => {
	return useContext(NewsContext);
};

const fetchNews = async (url = "/everything?q=india") => {
	const response = await api.get(
		`${url}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`,
	);
	return response.data;
};

export { useNewsContext, fetchNews }