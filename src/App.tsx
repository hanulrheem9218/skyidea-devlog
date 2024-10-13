import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Blank from './pages/Blank'

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Blank/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
