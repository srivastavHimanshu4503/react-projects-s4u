const PopupWindow = ({ actionName, setTogglePopup }) => {
    let buttonStyle =
		"px-3 py-1 rounded-4xl font-medium text-white cursor-pointer ";
    return (
		<>
			<header className="bg-black p-3 fixed top-0 w-full flex justify-end h-16">
				<button
					className="cursor-pointer px-3 py-2 rounded-2xl bg-gray-700"
					onClick={() => {
						setTogglePopup((prev) => !prev);
					}}
				>
					❌
				</button>
			</header>
			<div className="w-screen h-screen bg-black flex justify-center items-center">
				<div className="p-3 bg-gray-800 rounded-xl text-center flex flex-col gap-4 ">
					<h2>
						⚠️{" "}
						{actionName.charAt(0).toUpperCase() +
							actionName.slice(1)}{" "}
						this file
					</h2>
					<p>Are you sure want to {actionName} this file?</p>
					<div className="flex justify-around m-3">
						<button
							className={buttonStyle + "bg-red-400"}
							onClick={() => {
								setTogglePopup((prev) => !prev);
							}}
						>
							No
						</button>

						<button
							className={buttonStyle + "bg-green-400"}
							onClick={() => {
								setTogglePopup((prev) => !prev);
							}}
						>
							Yes
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default PopupWindow
