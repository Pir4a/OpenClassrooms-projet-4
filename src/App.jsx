import { Route, Routes } from "react-router-dom"
import "./App.scss"
import Header from "./Components/Header/Header"
import Home from "./Pages/Home"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
