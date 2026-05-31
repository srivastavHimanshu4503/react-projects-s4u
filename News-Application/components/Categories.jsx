import Wrapper from "./Wrapper";
import { useNewsContext, fetchNews } from "../utils.js";

const Categories = () => {
    const categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"];

    const { setNews, setLoading } = useNewsContext();

    const handleClick = async (e) => {
        setLoading(true);
        const data = await fetchNews(`/everything?q=${e.target.value}`);
        setNews(data.articles);
        setLoading(false);
    }

	return (
		<div className="flex justify-center mt-4">
            <Wrapper className={"px-4 flex gap-4 justify-center flex-wrap"}>
                {
                    categories.map((category, index) => (
                        <button key={index}
                            value={category}
                            className="btn btn-primary"
                            onClick={handleClick}
                        >
                            { category }
                        </button>
                            
                    ))
                }
            </Wrapper>
		</div>
	);
};

export default Categories;
