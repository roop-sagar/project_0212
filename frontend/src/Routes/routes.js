import Login from '../components/Login';
import Register from '../components/Register';
import Home from '../components/Home';
import {Routes,Route} from "react-router-dom";

function Routing() {
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

export default Routing;
