import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Common/Footer';
import Header from './Pages/Common/Header';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
      <Header></Header>  
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>  
      </Routes>
      <Footer></Footer>   
    </div>
  );
}

export default App;
