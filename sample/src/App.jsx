import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Weblayout from './layout/Weblayout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Weblayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
