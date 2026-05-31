const ForecastCard = ({ day, high, low, description, icon, humidity }) => {
	// Temperature-based card color
	let bgGradient = "bg-gradient-to-b from-slate-700 to-slate-800";
	let accentColor = "text-blue-300";

	if (high >= 25) {
		bgGradient = "bg-gradient-to-b from-slate-700 to-orange-900";
		accentColor = "text-orange-300";
	} else if (high >= 15) {
		bgGradient = "bg-gradient-to-b from-slate-700 to-slate-800";
		accentColor = "text-cyan-300";
	}

	return (
		<div
			className={`card ${bgGradient} shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300`}
		>
			<div className="card-body text-gray-100 p-4">
				<h3 className="card-title text-lg font-bold justify-center text-gray-100">
					{day}
				</h3>

				<div className="flex justify-center">
					<img
						src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
						alt={description}
						className="w-16 h-16"
					/>
				</div>

				<p className="text-sm text-center text-gray-300 mb-3">
					{description}
				</p>

				<div className="space-y-2">
					<div className="flex justify-between items-center bg-slate-600 rounded p-2">
						<span className="text-sm text-gray-300">High:</span>
						<span className="font-bold text-lg text-gray-100">
							{high}°C
						</span>
					</div>
					<div className="flex justify-between items-center bg-slate-600 rounded p-2">
						<span className="text-sm text-gray-300">Low:</span>
						<span className="font-bold text-lg text-gray-100">
							{low}°C
						</span>
					</div>
					<div className="flex justify-between items-center bg-slate-600 rounded p-2">
						<span className="text-sm text-gray-300">Humidity:</span>
						<span className="font-bold text-gray-100">
							{humidity}%
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForecastCard;
