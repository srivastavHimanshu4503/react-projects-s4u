import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCity } from "../redux/actions/weatherAction";

const SearchBar = () => {
	const city = useSelector((state) => state.weatherReducer.city);
	const [searchInput, setSearchInput] = useState(city);
	const dispatch = useDispatch();

	const handleSearch = (e) => {
		e.preventDefault();
		if (searchInput.trim()) {
			dispatch(setCity(searchInput.trim()));
		}
	};

	return (
		<div className="w-full max-w-md mx-auto mb-6">
			<form
				onSubmit={handleSearch}
				className="flex gap-2"
			>
				<input
					type="text"
					placeholder="Search city..."
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
					className="input input-bordered input-accent flex-1 rounded-lg bg-slate-700 text-gray-100 placeholder-gray-400 border-slate-600"
				/>
				<button
					type="submit"
					className="btn  rounded-lg font-semibold bg-slate-600 hover:bg-slate-500 border-slate-600 text-gray-100"
				>
					Search
				</button>
			</form>
		</div>
	);
};

export default SearchBar;
