import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './components/Weather.js';
import Header from './components/Header.js'
import Student from './components/Student.js'
import Footer from './components/Footer.js'
import Notfound from './components/Notfound.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/product" element={<Student />} />
          <Route path="/price" element={<Weather />} />
          <Route path="/contact/:meo" element={<Student />} />
          <Route path="/contact" element={<Weather />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>

      {/* <Weather />

      <Footer /> */}

    </div>
  );
}

export default App;
