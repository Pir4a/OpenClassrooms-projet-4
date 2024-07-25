import { Route, Routes } from "react-router-dom"
import "./App.scss"
import Header from "./Components/Header"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" />
      </Routes>
    </>
  )
}

export default App
