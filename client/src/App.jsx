import React from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' exact element={ <Home /> } />
      <Route path='/profile' exact element={ <Profile /> } />
      <Route path='/sign-in' exact element={ <SignIn /> } />
      <Route path='/sign-up' exact element={ <SignUp /> } />
      <Route path='/about' exact element={ <About /> } />
    </Routes>
    </BrowserRouter>
  )
}

export default App
App