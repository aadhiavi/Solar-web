import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import SelahSolarFullPage from './pages/about/SelahSolarFullPage'
import Hero from './pages/home/Hero'
import Leadership from './pages/home/Leadership'
import SolarSolutions from './pages/home/SolarSolutions'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <SolarSolutions />
      <SelahSolarFullPage />
      <Leadership />
      <Footer />
    </>
  )
}

export default App
