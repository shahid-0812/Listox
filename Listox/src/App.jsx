import { Navbar } from "./Components/Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from "./Pages/Home"
import { Contact } from "./Pages/Contact"
import { Footer } from "./Components/Footer"
import { About } from "./Pages/About"
import { Listing } from "./Pages/Listing"
import { Gallery } from "./Pages/Gallery"

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
        <Route path="/listing" element={<Listing />} />
        <Route path="/gallery" element={<Gallery />} />


      </Routes>

      {/* <Footer /> */}
    </>
  )
}
