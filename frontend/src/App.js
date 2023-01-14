import './App.css';
import Routing from './Routes/routes';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>  
       <Routing />
       {/* <Outlet /> */}
    </div>
    
  );
}

export default App;
