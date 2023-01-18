import Login from '../component/auth/Login';
import Register from '../component/auth/Register';
import Home from '../component/auth/Home';
import {Routes,Route} from "react-router-dom";
import Profile from './../component/Profile';
import Addfriend from '../component/Addfriend';
import Dashboard from '../component/Dashboard';
import Chat from '../component/Chat';

function Routing() {
  return (
    <div>  
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/dashboard" element={<Dashboard/> }>
            <Route index element={<Profile/>} />
            <Route path='/dashboard/profile' element={<Profile/>} />
            <Route path='/dashboard/:id' element={<Chat />} />
            <Route path='/dashboard/addfriend' element={<Addfriend/>} />
          </Route>
        </Routes>
    </div>
    
  );
}
export default Routing;