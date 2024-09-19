import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";


const App = () => {

  return (
    <>
      {/* Login Form */}
       
        <BrowserRouter>
            <Navbar/>
          <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
       
    </>
  )
}
export default App;