import { createContext, useState } from "react";

const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const value = {
        news,
        setNews,
        loading,
        setLoading,
        error,
        setError
    };

    return (
        <NewsContext.Provider value={value}>
            {children}
        </NewsContext.Provider>
    );
};

export { NewsContextProvider, NewsContext };
