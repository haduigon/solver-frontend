/* eslint-disable */
import React from 'react';
import './App.scss';
import { Outlet, useLocation } from 'react-router-dom';
// import Logout from './components/Logout';
import Navbar from './components/Navbar';

export const App: React.FC = () => {
  const location = useLocation();
  console.log(location.pathname === '/', 'location');
  const myPlace = location.pathname;
  const showNavbar = myPlace !== '/' && myPlace !== '/login' && myPlace !== 'signup'
  return (
    <div className="App mainText">
      {/* <Navbar /> */}
      {showNavbar && <Navbar />}
      {/* <Logout /> */}
      <Outlet />
    </div>
  );
};
