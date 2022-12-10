import Login from '../component/Login';
import Register from '../component/Register';
import Home from '../component/Home';
import {Routes,Route} from "react-router-dom";
import Profile from './../component/Profile';

function Routing() {
  return (
    <div>  
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
    </div>
    
  );
}
export default Routing;