import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Devlog from './pages/Devlog'
import Viewer from './pages/Viewer'
import Home from './pages/Home'
import Admin from './pages/Admin'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/devlog" element={<Devlog/>}/>
          <Route path="/viewer" element={<Viewer/>}/>
          <Route path="/admin" element={<Admin/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
