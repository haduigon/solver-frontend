/* eslint-disable */
import {
  HashRouter,
  // Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
// import

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Route>
    </Routes>
  </HashRouter>
)

