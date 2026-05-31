import { useEffect } from 'react';
import './App.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from './redux/actions/weatherAction';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';

const App = () => {

  const city = useSelector(state => state.weatherReducer.city);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeather(city));
  }, [city, dispatch])


  return (
    <div className="min-h-screen bg-slate-900 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-gray-100 mb-2">Weather App</h1>
          <p className="text-slate-400 text-lg">Get real-time weather updates</p>
        </div>

        {/* Search Bar */}
        <SearchBar />

        {/* Current Weather */}
        <CurrentWeather />

        {/* Forecast */}
        <Forecast />
      </div>
    </div>
  )
}

export default App