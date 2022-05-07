import { Link, Route, Routes } from 'react-router-dom';
import './App.css'
import { HomePage } from './Components/Home';
import { Homedetail } from './Components/HomeDetails';
import { Login } from './Components/Login';
import { Signup } from './Components/Signup';
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { About } from "./Components/About";
function App() {


  return (
    <div className="App">
        <Navbar />
 <div><Link to="/">Home</Link>
 <Link to="/login">login</Link>
 <Link to="/signup">signup</Link>
 
 </div>

  <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/homedetail' element={<Homedetail/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path="/about" element={<About />}></Route>
  </Routes>
  <Footer />
    </div>
  )
}

export default App
