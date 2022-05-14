import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appionment from './Pages/Appionment/Appionment';
import Header from './Pages/Common/Header';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
      <Header></Header>  
      <Routes>
      <Route path='/' element={<Home></Home>}></Route> 
      <Route path='/appionment' element={<Appionment></Appionment>}></Route> 
      </Routes>
    </div>
  );
}

export default App;
