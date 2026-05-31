import {
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaYoutube,
} from "react-icons/fa";

const CardBody = ({ title, body }) => {
	return (
		<div className="w-[42vw] max-[500px]:w-[60vw] text-center mb-2 p-2 min-[685px]:w-[288px]">
			<h2
				style={{
					color: "black",
					marginTop: "20px",
					fontSize: "1.5rem",
				}}
			>
				{title}
			</h2>
			<p> {body} </p>
			<div className="flex text-[1.5rem] justify-center gap-4 mt-2 flex-wrap">
				<FaFacebook style={{ color: "blue" }} />
				<FaTwitter style={{ color: "skyblue" }} />
				<FaInstagram style={{ color: "hotpink" }} />
				<FaYoutube style={{ color: "red" }} />
			</div>
		</div>
	);
};
export default CardBody;
