import { Route, Routes } from "react-router-dom"
import "./App.scss"
import Header from "./Components/Header/Header"
import Home from "./Pages/Home"
import Footer from "./Components/Footer/Footer"
import Logements from "./Pages/Logements"
import Carrousel from "./Components/Carrousel/Carrousel"
import About from "./Pages/About"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/logements/:id" element={<Logements />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
