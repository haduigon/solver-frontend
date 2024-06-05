/* eslint-disable */
import React from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
};
