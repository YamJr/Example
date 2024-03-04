import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
import Footer from './Component/Footer/Footer'
import LoginSignup from './Component/Pages/LoginSignup'
import Men from './Component/Men/Men'
import Cart from './Component/Pages/Cart'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/women'/>
        <Route path='/kids'/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
