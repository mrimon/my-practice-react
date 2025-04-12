

import './App.css'
import DaisyNav from './components/daisyNav/DaisyNav'
import Navbar from './components/navbar/Navbar'
import PricingOption from './components/pricingOption/PricingOption'


function App() {



  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <PricingOption></PricingOption>
      </main>
    </>
  )
}

export default App
