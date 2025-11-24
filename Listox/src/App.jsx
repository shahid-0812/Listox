import { Navbar } from "./Components/Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useLocation } from "react-router-dom";

import { Home } from "./Pages/Home"
import { Contact } from "./Pages/Contact"
import { Footer } from "./Components/Footer"
import { About } from "./Pages/About"
import { Listing } from "./Pages/Listing"
import { Gallery } from "./Pages/Gallery"
import { Pricing } from "./Pages/Pricing"
import { Portfolio } from "./Pages/Portfolio"
import { Shop } from "./Pages/Shop"
import { News } from "./Pages/News"
import { HowITWorks } from "./Pages/HowITWorks"
import { Events } from "./Pages/Events"
import { Member } from "./Pages/Member"
import ScrollToTop from "./Components/ScrollToTop"
import { Testimonials } from "./Pages/Testimonials"
import { NewsDetails } from "./Pages/NewsDetails"
import { EventDetails } from "./Pages/EventDetails"
import { ProductDetails } from "./Pages/ProductDetails"
import { useState } from "react"
import { Cart } from "./Components/Cart"
import { Register } from "./Pages/Register";

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
  const [cartOpen, setCartOpen] = useState(false);
  const location = useLocation();

  const hideNavbarRoutes = ["/register"];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);
  return (
    <>

      {!shouldHideNavbar && (
        <>
          <Navbar cartOpen={cartOpen} setCartOpen={setCartOpen} />
          <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
        </>
      )}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/news" element={<News />} />
        <Route path="/howitworks" element={<HowITWorks />} />
        <Route path="/events" element={<Events />} />
        <Route path="/member" element={<Member />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/newsdetails" element={<NewsDetails />} />
        <Route path="/eventdetails" element={<EventDetails />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/register" element={<Register />} />


      </Routes>

      {!shouldHideNavbar && <Footer />}
    </>
  )
}
