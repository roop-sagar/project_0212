import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home'
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div>  
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
        </Routes>
    </div>
    
  );
}

export default App;
