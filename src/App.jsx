import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer.jsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>        
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailsContainer/>}/>
        <Route path='/' element={<ItemListContainer/>}/>        
      </Routes>
    </BrowserRouter>
    )
  }
  
  export default App
  