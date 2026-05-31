import Button from "./Button.jsx";
import CardHeader from "./CardHeader.jsx";
import CardBody from "./CardBody.jsx";
import CardFooter from "./CardFooter.jsx";

const Card = ({ title, body, likeCount, commentCount, shareCount }) => {
    // 288 at 685
    return (
		<div className="w-[42vw] max-[500px]:w-[60vw]  mx-auto bg-white rounded-3xl mb-3 min-[685px]:w-[288px] overflow-hidden">
			<CardHeader />
			<CardBody
				title={title}
				body={body}
			/>
			<div className="flex justify-center gap-2 m-3 max-[500px]:flex-col max-[500px]:items-center min-[685px]:w-[288px]">
				<Button text={"Subscribe"} />
				<Button text={"Message"} />
			</div>
			<CardFooter
				likeCount={likeCount}
				commentCount={commentCount}
				shareCount={shareCount}
			/>
		</div>
	);
}

export default Card
