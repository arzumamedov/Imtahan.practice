import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mainlayout from './layouts/Mainlayout'
import Homepage from './pages/Homepage'
import Addpage from './pages/Addpage'
import Detail from './pages/Detail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Mainlayout />}>
            <Route index element={<Homepage />} />
            <Route path='/about' element={<Addpage />} />
            <Route path='/:id' element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
