import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
import Footer from './Component/Footer/Footer'
import Accesories from './Component/Accesories/accesories'
import Banner from './Component/Pages/Banner'
import LoginSignup from './Component/Pages/LoginSignup'

function App() {
  return (
    <>
    {/* <LoginSignup /> */}
      <Navbar />
      <Home />
      <Accesories />
      <Banner/>
      <Footer />
    </>
  )
}

export default App
