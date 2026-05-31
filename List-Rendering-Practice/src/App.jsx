import Product from './components/Product';
import data from "./assets/data.json";

function App() {
  return (
    <div className='w-[95vw] flex flex-col justify-center items-center'>
      {
        data.map((product, id) => {
          return <Product key={id} product={product} />
        })
      }
    </div>
  )
}

export default App
