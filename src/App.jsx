

import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/daisyNav/DaisyNav'
import Navbar from './components/navbar/Navbar'
import PricingOption from './components/pricingOption/PricingOption'
import ResultCart from './components/ResultCart/ResultCart'
import MonthlySales from './components/ResultCart/MonthlySales'
import BarCart from './components/ResultCart/BarCart'
import axios from 'axios'
import MarkChart from './components/MarkChart/MarkChart'


const pricingPromise = fetch('pricingData.json').then(res => res.json())
const marksPromise = axios.get('marksData.json')

function App() {

  return (
    <div className='mx-5 md:mx-10'>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>

        <div className='grid md:grid-cols-3 my-20'>
          <ResultCart></ResultCart>
          <MonthlySales></MonthlySales>
          <BarCart></BarCart>
        </div>
        <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
          <MarkChart marksPromise={marksPromise}></MarkChart>
        </Suspense>
      </main>
    </div>
  )
}

export default App
