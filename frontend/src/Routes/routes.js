import Login from '../component/Login';
import Register from '../component/Register';
import Home from '../component/Home';
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