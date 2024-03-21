
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import PriceOptions from './Components/Navbar/PriceOptions/PriceOptions'

function App() {

  return (
    <div className='w-[90%]  max-w-[1300px] mx-auto mt-[50px]'>
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
    </div>
  )
}

export default App
