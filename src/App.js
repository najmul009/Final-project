import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appionment from './Pages/Appionment/Appionment';
import Header from './Pages/Common/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';

function App() {
  return (
    <div>
      <Header></Header>  
      <Routes>
      <Route path='/' element={<Home></Home>}></Route> 
      <Route path='/appionment' element={<Appionment></Appionment>}></Route> 
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
