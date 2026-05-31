import { AiOutlineMenuFold } from "react-icons/ai";

const Header = ({ setActiveSidebar }) => {
	return (
		<header className="bg-[lightseagreen] flex gap-1 justify-between text-white p-3 items-center fixed top-0 w-full h-16">
			<div className="font-bold text-white text-2xl">Logo</div>
			<div className="flex gap-4 cursor-pointer max-[500px]:hidden">
				<div>Home</div>
				<div>About</div>
				<div>Service</div>
				<div>Help</div>
			</div>
			<div className="flex gap-4 items-center">
				<div className="flex gap-2 max-[300px]:hidden">
					<button className="cursor-pointer border px-2 rounded-2xl">
						Login
					</button>
					<button className="cursor-pointer border px-2 rounded-2xl">
						Signup
					</button>
				</div>
				<AiOutlineMenuFold
					className="cursor-pointer text-2xl min-[500px]:hidden"
					onClick={() => {
						setActiveSidebar(true);
					}}
				/>
			</div>
		</header>
	);
};

export default Header;
