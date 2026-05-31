import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { BiShare } from "react-icons/bi";

const CardFooter = ({ likeCount, commentCount, shareCount }) => {
	let style = { color: "black" };
	return (
		<>
			<div className="flex justify-center m-2 p-2 max-[500px]:w-[60vw] min-[685px]:w-[288px] flex-wrap gap-2">
				<div className="flex gap-x-1 px-2 h-fit justify-center items-center w-fit border-r-neutral-600 border-r-[1.5px] max-[269px]:border-none">
					<FaRegHeart style={style} />{" "}
					<span style={style}>{likeCount}k</span>
				</div>
				<div className="flex gap-x-1 px-2 h-fit justify-center items-center w-fit border-r-neutral-600 border-r-[1.5px] max-[269px]:border-none">
					<FaRegComment style={style} />
					<span style={style}>{commentCount}k</span>
				</div>
				<div className="flex gap-x-1 px-2 h-fit justify-center items-center w-fit">
					<BiShare style={style} />
					<span style={style}>{shareCount}k</span>
				</div>
			</div>
		</>
	);
};

export default CardFooter
