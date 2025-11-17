import { Navbar } from "./Components/Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from "./Pages/Home"
import { Contact } from "./Pages/Contact"
import { Footer } from "./Components/Footer"
import { About } from "./Pages/About"

function App() {

  return (
    <>
      <BrowserRouter>
        <AppWrapper />
      </BrowserRouter>
    </>
  )
}

export default App

function AppWrapper() {
  return (
    <>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />


      </Routes>

      {/* <Footer /> */}
    </>
  )
}
