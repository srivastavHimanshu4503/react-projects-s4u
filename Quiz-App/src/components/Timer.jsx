import { useEffect } from "react";
import { useState } from "react";

const Timer = ({ setIsOver }) => {
	const [leftTime, setLeftTime] = useState(365);

	useEffect(() => {
		let intervalId = setInterval(() => {
			setLeftTime((prev) => {
				if (prev <= 0) {
					clearInterval(intervalId);
					return 0;
				}
				return prev - 1;
			});
		}, 1000);
		return () => {
			clearInterval(intervalId);
		};
	}, []);

	let displayTime = `
    ${Math.floor(leftTime / 3600)
		.toString()
		.padStart(2, "0")}
    : ${Math.floor((leftTime % 3600) / 60)
		.toString()
		.padStart(2, "0")} 
    : ${(leftTime % 60).toString().padStart(2, "0")}
    `;

	useEffect(() => {
		if (leftTime === 0) {
			setIsOver(true);
		}
	}, [leftTime, setIsOver]);

	return (
		<>
			<h2>Time Left: {displayTime}</h2>
		</>
	);
};

export default Timer
