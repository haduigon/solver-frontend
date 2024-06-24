/* eslint-disable */
import React from 'react';
import './App.scss';
import { Outlet, useLocation } from 'react-router-dom';

export const App: React.FC = () => {
  const location = useLocation();
  console.log(location.pathname === '/', 'location');
  
  return (
    <div className="App">
      <Outlet />
    </div>
  );
};
