import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Button from './components/Button.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }
  return (
    <>
      <Navbar />
      <Hero counter = { count } />
      <div className="buttons">
        <Button text="➕ Increment" updater = {increment}/>
        <Button text="➖ Decrement" updater = {decrement}/>
        <Button text="🔄️ Reset" updater = {reset}/>
      </div>
    </>
  )
}

export default App
