import { formatDistanceToNow } from "date-fns";

const NewsCard = ({ data }) => {
	return (
		<>
			<div className="card bg-base-300 w-full shadow-sm max-h-125 relative">
				<figure className="h-1/2 aspect-video object-contain">
					<img
						src={
							data.urlToImage ||
							"https://placehold.co/600x400?text=No+Image"
						}
						alt="news"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title line-clamp-2">{data.title}</h2>
					<p className="line-clamp-3">{data.description}</p>
					<p>
						{formatDistanceToNow(new Date(data.publishedAt), {
							addSuffix: true,
						})}
					</p>
					<div className="card-actions justify-between mt-1">
						<span className="btn btn-info text-white">
							{data.source.name}
						</span>
						<a
							href={data.url}
							className="btn btn-primary"
						>
							Read More
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default NewsCard;
