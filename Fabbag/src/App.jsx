import { Link, Route, Routes } from 'react-router-dom';
import './App.css'
import { HomePage } from './Components/Home';
import { Homedetail } from './Components/HomeDetails';
import { Login } from './Components/Login';
import { Signup } from './Components/Signup';
function App() {


  return (
    <div className="App">
 <div><Link to="/">Home</Link>
 <Link to="/login">login</Link>
 <Link to="/signup">signup</Link>
 
 </div>

  <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/homedetail' element={<Homedetail/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
  </Routes>
    </div>
  )
}

export default App
