import { useSelector } from "react-redux";

const CurrentWeather = () => {
	const { current, current_loading, current_error } = useSelector(
		(state) => state.weatherReducer,
	);

	if (current_loading) {
		return (
			<div className="flex justify-center items-center py-12">
				<span className="loading loading-spinner loading-lg text-blue-400"></span>
			</div>
		);
	}

	if (current_error) {
		return (
			<div className="alert alert-error rounded-lg mb-6 bg-red-900 text-gray-100 border-red-800">
				<span>{current_error?.message}</span>
			</div>
		);
	}

	if (!current) return null;

	// Temperature-based background color logic
	const temp = Math.round(current.main.temp - 273.15); // Convert Kelvin to Celsius
	let bgColor = "bg-gradient-to-br from-slate-700 to-slate-800"; // Cold
	let accentColor = "text-blue-300";
	let borderColor = "border-blue-700";

	if (temp >= 25) {
		bgColor = "bg-gradient-to-br from-slate-700 to-orange-900"; // Hot
		accentColor = "text-orange-300";
		borderColor = "border-orange-700";
	} else if (temp >= 15) {
		bgColor = "bg-gradient-to-br from-slate-700 to-slate-800"; // Moderate
		accentColor = "text-cyan-300";
		borderColor = "border-cyan-700";
	}

	const weatherDescription = current.weather[0].main;
	const weatherIcon = current.weather[0].icon;
	const humidity = current.main.humidity;
	const windSpeed = current.wind.speed;
	const feelsLike = Math.round(current.main.feels_like - 273.15);

	return (
		<div
			className={`card shadow-2xl rounded-2xl border-2 ${borderColor} overflow-hidden mb-8 ${bgColor}`}
		>
			<div className="card-body text-gray-100">
				<h2 className="card-title text-3xl font-bold mb-2">
					{current.name}, {current.sys.country}
				</h2>

				<div className="flex items-center justify-between mb-6">
					<div className="flex items-center gap-4">
						<div className="text-7xl font-bold text-yellow-300">
							{temp}°
						</div>
						<div>
							<p className="text-2xl font-semibold text-gray-100">
								{weatherDescription}
							</p>
							<p className="text-lg text-gray-300">
								Feels like {feelsLike}°
							</p>
						</div>
					</div>
					<img
						src={`https://openweathermap.org/img/wn/${weatherIcon}@4x.png`}
						alt={weatherDescription}
						className="w-32 h-32"
					/>
				</div>

				<div className="grid grid-cols-3 gap-4 text-center">
					<div className="bg-slate-600 rounded-lg p-3">
						<p className="text-sm text-gray-300">Humidity</p>
						<p className="text-2xl font-bold text-gray-100">
							{humidity}%
						</p>
					</div>
					<div className="bg-slate-600 rounded-lg p-3">
						<p className="text-sm text-gray-300">Wind Speed</p>
						<p className="text-2xl font-bold text-gray-100">
							{windSpeed.toFixed(1)} m/s
						</p>
					</div>
					<div className="bg-slate-600 rounded-lg p-3">
						<p className="text-sm text-gray-300">Pressure</p>
						<p className="text-2xl font-bold text-gray-100">
							{current.main.pressure} mb
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CurrentWeather;
