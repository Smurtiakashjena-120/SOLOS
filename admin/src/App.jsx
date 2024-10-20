import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { DashBoard } from './pages/DashBoard'
import { Stocks } from './pages/Stocks'
import { Reviews } from './pages/Reviews'
import { NavBar } from './navbar/NavBar'
import { News } from './pages/News'
import { FinancialGrowth } from './pages/FinancialGrowth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
     <div className="flex flex-col h-[100vh] w-[100vw]">
    
      <div className='w-full h-full'>
      <Routes>
      <Route path="/" element={<DashBoard/>}/>
         <Route path="/reviews" element={<Reviews/>}/>
         <Route path="/news" element={<News/>}/>
         <Route path="/stocks" element={<Stocks/>}/>
         <Route path="/finance" element={<FinancialGrowth/>}/>

      </Routes>
      </div>
     </div>
    </BrowserRouter>
  )
}

export default App
