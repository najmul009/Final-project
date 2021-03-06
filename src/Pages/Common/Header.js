import React from 'react';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from './Loading';

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  };
  const manubar = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/appionment'>Appionment</Link></li>
    <li><Link to='/reviews'>Reviews</Link></li>
    <li><Link to='/contact'>Contact</Link></li>
    <li><Link to='/about'>About</Link></li>
    {user && <li><Link to='/dashboard'>DashBoard</Link></li>}
  </>
  if (loading) {
    return <Loading></Loading>
  }
  let signInError;
  if (error ) {
    signInError = <p className='text-red-500'><small>{error?.message }</small></p>
};
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {manubar}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl">Dcotors Portal</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {manubar}
        </ul>
      </div>
      <div className="navbar-end">
        {signInError}
        {user ? <button onClick={logout} className="btn btn-accent">Logout</button> : <Link to='/login' className="btn">Login</Link>}
      </div>
    </div>
  );
};

export default Header;