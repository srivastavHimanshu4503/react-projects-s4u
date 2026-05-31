
const Button = ({ text, setPopupDisplay, setActionName }) => {
	function togglePopupDisplay() {
        setActionName(text);
		setPopupDisplay((prev) => !prev);
	}



	return (
		<>
			<button
				className="cursor-pointer border px-4 py-1 rounded-4xl bg-black"
				onClick={togglePopupDisplay}
			>
				{text}
			</button>
		</>
	);
};

export default Button;
