import { useRef, useState } from "react";
import "./App.css";

function App() {

	const [extraValue, setExtraValue] = useState({
		numbers: false,
		splChars: false,
	});
	const [passwordLength, setPasswordLength] = useState(8);
	const [password, setPassword] = useState(() =>
		generatePassword(passwordLength),
	);

	const [savePasswords, setSavePasswords] = useState([]);
	const [maxLength, setMaxLength] = useState(20);
	const inputRef = useRef(null);

	const additionalFeatures = [
		"Numbers Allowed numbers",
		"Special Characters Allowed splChars",
	];
	const buttons = ["Copy Password", "Reset Password", "Save Password"];

	function generatePassword(length, option = extraValue) {
		const letters = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";
		const numbers = "0123456789";
		const splChars = "!@#$%^&*({[]})>|<?";

		let password = "";
		const allowedCharacters =
			letters +
			(option.numbers === true ? numbers : "") +
			(option.splChars === true ? splChars : "");

		for (let i = 0; i < length; i++) {
			const idx = Math.floor(Math.random() * allowedCharacters.length);
			const char = allowedCharacters.charAt(idx);
			password += char;
		}
		return password;
	}

	function handleCheckbox(e) {
		let { name, checked } = e.target;
		setExtraValue((prev) => {
			const updated = { ...prev, [name]: checked };
			setPassword(() => generatePassword(passwordLength, updated));
			return updated;
		});
	}

	return (
		<div className="flex justify-center w-screen">

			<div className="flex flex-col items-center gap-5 w-[80%] py-5">

			
				
        {/* Title */}
        <h1 className="font-bold text-3xl">Password Generator</h1>

				{/* Password Display Field */}
				<label
					htmlFor="password"
					className="flex justify-between w-[80%] gap-4"
				>
					<input
						type="text"
						value={password}
						ref={inputRef}
						readOnly
						className="bg-white text-black w-[80%] p-2 px-3 rounded-2xl font-bold text-xl outline-none flex-1"
					/>
					<span
						className="text-4xl cursor-pointer"
						onClick={() =>
							setPassword(() => generatePassword(passwordLength))
						}
					>
						🔄️
					</span>
				</label>

				{/* Range Field */}
				<div className="flex gap-2 w-[80%] justify-between">
					<input
						type="range"
						name="length"
						id="length"
						className="w-[80%] flex-1"
						value={passwordLength}
						min={0}
						max={maxLength}
						onChange={(e) => {
							setPasswordLength(e.target.value);
							setPassword(() => generatePassword(e.target.value));
						}}
					/>
					{"Max: "}
					<select
						className="bg-black text-white cursor-pointer"
            value={maxLength}
						onChange={(e) => {
							let newMaxLen = e.target.value;
							if (newMaxLen < 8 || maxLength < 8) {
								setPasswordLength(newMaxLen);
								setPassword(() => generatePassword(newMaxLen));
							}
							setMaxLength(newMaxLen);
						}}
					>
						<option value={20}>{maxLength}</option>
						{Array.from({ length: 100 }, (_, i) => i + 1).map(
							(num) => {
								return (
									<option
										key={num}
										value={num}
									>
										{" "}
										{num}
									</option>
								);
							},
						)}
					</select>
				</div>
				<p className="w-[80%]">Length: {passwordLength}</p>

				{/* Checkbox Features */}
				{additionalFeatures.map((feature) => {
					return (
						<div
							key={feature}
							className="w-[80%]"
						>
							<label
								htmlFor={feature}
								className="flex gap-2"
							>
								<input
									type="checkbox"
									name={feature.split(" ").pop()}
									id={feature}
									checked={
										extraValue[feature.split(" ").pop()]
									}
									onChange={handleCheckbox}
								/>
								<span>
									{feature.split(" ").slice(0, -1).join(" ")}
								</span>
							</label>
						</div>
					);
				})}

				{/* Action Buttons */}
				{buttons.map((text) => {
					return (
						<div
							data-name={text.split(" ")[0].toLowerCase()}
							className="bg-blue-500 w-[80%] rounded-2xl p-2 text-center cursor-pointer select-none"
							key={text}
							onClick={async (e) => {
								let { name } = e.target.dataset;

								switch (name) {
									case "copy":
										await navigator.clipboard.writeText(
											password,
										);
										inputRef.current.select();
                    inputRef.current.setSelectionRange(0, maxLength);
										console.log(inputRef.current);
										break;

									case "reset": {
										let updatedValues = {
											numbers: false,
											splChars: false,
										};
										setExtraValue(updatedValues);
										setSavePasswords([]);
										setMaxLength(20);
										setPasswordLength(8);
										setPassword(() => generatePassword(8, updatedValues));
										break;
									}

									case "save":
										setSavePasswords((prev) => {
											if (prev.includes(password))
												return prev;
											return [...prev, password];
										});
										break;
								}
							}}
						>
							{text}
						</div>
					);
				})}

				{/* Save Passwords */}
				{savePasswords.map((password, index) => {
					return (
						<div
							className="w-[80%]"
							key={index}
						>
							{password}
						</div>
					);
				})}

			</div>

		</div>
	);
}

export default App;
