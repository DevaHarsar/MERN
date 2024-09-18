import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


const App = () => {

  return (
    <>
      {/* Login Form */}
       
        <BrowserRouter>
            <Navbar/>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
       
    </>
  )
}
export default App;