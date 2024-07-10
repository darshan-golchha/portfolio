import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import {About, Home, Projects} from './pages';
import Awd from './pages/awards';

const App = () => {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/awards' element={<Awd />} />
        </Routes>
      </Router>
  )
}

export default App