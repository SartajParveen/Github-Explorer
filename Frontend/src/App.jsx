import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import DashBoard from './Components/DashBoard/DashBoard'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <LandingPage/> */}
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/dashboard' element={<DashBoard/>} />
        </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App
