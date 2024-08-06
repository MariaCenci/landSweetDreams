import { BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import AppRoutes from './AppRoutes'

const App = () => {


  return (
    <>
     <BrowserRouter>
     <AppRoutes />
     </BrowserRouter>
    </>
  )
}

export default App
