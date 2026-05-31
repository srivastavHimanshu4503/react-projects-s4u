
const SideBar = ({ setActiveSidebar, className }) => {

	return (
			<div
				className={`${ className } w-45 h-screen absolute top-0 bg-black flex flex-col justify-start items-center gap-3 z-10`}
			>
				<div className="flex justify-between w-full items-center mt-2 p-2">
					<h2>LOGO</h2>
					<button
						className="cursor-pointer px-3 py-2 rounded-2xl bg-gray-400/20"
						onClick={() => {
							setActiveSidebar(false);
						}}
					>
						❌
					</button>
				</div>

				<div className="flex flex-col gap-y-8 h-max w-full py-3 text-center">
					<div className="hover:bg-[#161414] p-1">
						Home
					</div>
					<div className="hover:bg-[#161414] p-1">
						About
					</div>
					<div className="hover:bg-[#161414] p-1">
						Service
					</div>
					<div className="hover:bg-[#161414] p-1">
						Help
					</div>
				</div>

				<div className="h-full flex p-2 items-end">
					<div className="flex gap-2 h-max">
						<button className="cursor-pointer border px-2 rounded-2xl">
							Login
						</button>
						<button className="cursor-pointer border px-2 rounded-2xl">
							Signup
						</button>
					</div>
				</div>
			</div>
	);
};

export default SideBar
