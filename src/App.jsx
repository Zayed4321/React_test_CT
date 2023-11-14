import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Products from "./Pages/Products"
import Contact from "./Pages/Contact"
import IndividualShareCard from "./Pages/IndividualShareCard"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/home" element={ <Home/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/products" element={ <Products/> } />
        <Route path="/home/:uniqueId" element={<IndividualShareCard />} />
      </Routes>
    </>
  )
}

export default App
