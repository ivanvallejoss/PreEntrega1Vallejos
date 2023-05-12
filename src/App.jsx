import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>        
        <Route path='/category/:id' element={<ItemListContainer/>}/>
        <Route path='/' element={<ItemListContainer/>}/>        
      </Routes>
    </BrowserRouter>
    )
  }
  
  export default App
  