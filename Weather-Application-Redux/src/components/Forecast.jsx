import { useSelector } from "react-redux";
import ForecastCard from "./ForecastCard";

const Forecast = () => {
	const { forecast, forecast_loading, forecast_error } = useSelector(
		(state) => state.weatherReducer,
	);

	if (forecast_loading) {
		return (
			<div className="flex justify-center items-center py-12">
				<span className="loading loading-spinner loading-lg text-blue-400"></span>
			</div>
		);
	}

	if (forecast_error) {
		return (
			<div className="alert alert-error rounded-lg bg-red-900 text-gray-100 border-red-800">
				<span>{forecast_error?.message}</span>
			</div>
		);
	}

	if (!forecast || forecast.length === 0) return null;

	// Group forecast data by day and calculate daily averages
	const forecastByDay = {};

	forecast.forEach((item) => {
		const date = item.dt_txt.split(" ")[0];

		if (!forecastByDay[date]) {
			forecastByDay[date] = {
				temps: [],
				humidity: [],
				weather: item.weather[0],
				icon: item.weather[0].icon,
				description: item.weather[0].main,
			};
		}

		forecastByDay[date].temps.push(item.main.temp - 273.15);
		forecastByDay[date].humidity.push(item.main.humidity);
	});

	// Get the first 4 days
	const forecastDays = Object.entries(forecastByDay)
		.slice(0, 4)
		.map(([date, data]) => {
			const high = Math.round(Math.max(...data.temps));
			const low = Math.round(Math.min(...data.temps));
			const avgHumidity = Math.round(
				data.humidity.reduce((a, b) => a + b) / data.humidity.length,
			);
			const dateObj = new Date(date);
			const dayName = dateObj.toLocaleDateString("en-US", {
				weekday: "short",
				month: "short",
				day: "numeric",
			});

			return {
				day: dayName,
				high,
				low,
				avgHumidity,
				icon: data.icon,
				description: data.description,
			};
		});

	return (
		<div className="mt-8">
			<h2 className="text-3xl font-bold text-gray-100 mb-6">
				4-Day Forecast
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				{forecastDays.map((day, index) => (
					<ForecastCard
						key={index}
						day={day.day}
						high={day.high}
						low={day.low}
						humidity={day.avgHumidity}
						icon={day.icon}
						description={day.description}
					/>
				))}
			</div>
		</div>
	);
};

export default Forecast;
