import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ChiSiamo from './pages/ChiSiamo'
import AppMain from './components/AppMain'
import Home from './pages/Home'
import DefaultLayout from './pages/DefaultLayout'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>

            <Route path='/' element={<Home />} />
            <Route path='/chisiamo' element={<ChiSiamo />} />
            <Route path='/postlist' element={<AppMain />} />

          </Route>



        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App