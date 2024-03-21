
import './App.css'
import LineChat from './Components/LineChat/LineChat'
import Navbar from './Components/Navbar/Navbar'
import PriceOptions from './Components/Navbar/PriceOptions/PriceOptions'
import PhonesFetch from './Components/PhonesFetch/PhonesFetch'

function App() {

  return (
    <div className='w-[90%]  max-w-[1300px] mx-auto mt-[50px]'>
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <LineChat></LineChat>
      <PhonesFetch></PhonesFetch>
    </div>
  )
}

export default App
