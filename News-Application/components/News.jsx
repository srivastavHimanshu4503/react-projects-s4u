import { useEffect } from "react";
import { useNewsContext, fetchNews } from "../utils.js";
import NewsCard from "./NewsCard";
import Wrapper from "./Wrapper";
import Loader from "./Loader.jsx";

const News = () => {
	const { news, setNews, loading, setLoading, error, setError } =
		useNewsContext();

		useEffect(() => {
			const getNews = async () => {
				setLoading(true);

				try {
					const data = await fetchNews();

					if (data?.articles) {
						setNews(data.articles);
					}
				} catch (err) {
					setError(err.message);
				} finally {
					setLoading(false);
				}
			};

			getNews();
		}, [setNews, setLoading, setError]);

	if (loading) return <Loader />;

	if (error) return <p>Error: {error} </p>;

	return (
		<div className="flex justify-center mt-8">
			<Wrapper
				className={
					"grid grid-cols-3 gap-8 max-[500px]:grid-cols-1 max-[900px]:grid-cols-2 p-4"
				}
			>
				{news.map((data) => (
					<NewsCard
						key={data.url}
						data={data}
					/>
				))}
			</Wrapper>
		</div>
	);
};

export default News;
