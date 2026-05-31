function Button({ text }) {
	return (
		<>
			<button className="bg-[#4071F3] text-white w-max py-1.5 px-4 rounded-2xl cursor-pointer">
                { text }
            </button>
		</>
	);
}

export default Button;