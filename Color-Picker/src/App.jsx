import { useState } from 'react'
import './App.css'
import Button from './components/Button';
import ColorContainer from './components/ColorContainer';

function App() {
  const [ selectedColor, setSelectedColor ] = useState("white");

  const colors = ["red", "blue", "pink", "aqua", "lightseagreen", "green", "grey", "wheat", "yellow", "orange"];

  return (
		<>
      <h1 style={{color: selectedColor}}>🎨 Welcome to Color Picker !</h1>

      <div className='flex justify-center gap-4 flex-wrap'>
        {colors.map((color, index) => {
          return (
            <Button
              key={index}
              setSelectedColor={setSelectedColor}
            >
              {color}
            </Button>
          );
        })}
      </div>

			<ColorContainer color={selectedColor}/>
		</>
  );
}

export default App
