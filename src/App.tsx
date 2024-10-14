import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Blank from './pages/Blank'
import Viewer from './pages/Viewer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Blank/>}/>
          <Route path="/viewer" element={<Viewer/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
