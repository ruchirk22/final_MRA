import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListUserComponent from './components/ListUserComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'

function App() {

  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
        <Routes>
          <Route path='/' element = { <Home /> }></Route>
          <Route path='/users' element = { <ListUserComponent /> }></Route>
          <Route path='/register' element = { <Login /> }></Route>
        </Routes>
      <FooterComponent />
    </BrowserRouter>
      
    </>
  )
}

export default App
