import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appionment from './Pages/Appionment/Appionment';
import Header from './Pages/Common/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyAppionment from './Pages/DashBoard/MyAppionment';
import MyReviews from './Pages/DashBoard/MyReviews';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appionment' element={
          <RequireAuth>
            <Appionment></Appionment>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <DashBoard></DashBoard>
          </RequireAuth>}>
          <Route index element={<MyAppionment></MyAppionment>}></Route>
          <Route path='/dashboard/reviews' element={<MyReviews></MyReviews>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
