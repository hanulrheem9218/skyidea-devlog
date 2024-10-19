import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Blank from './pages/Blank'
import Viewer from './pages/Viewer'
import Home from './pages/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/devlog" element={<Blank/>}/>
          <Route path="/viewer" element={<Viewer/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
