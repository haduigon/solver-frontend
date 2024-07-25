/* eslint-disable */
import {
  HashRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ChatPage from './pages/ChatPage';
import ProtectedRoute from './app/routes/ProtectedRoute';
import ProfilePage from './pages/PofilePage/ProfilePage';
import HistoryPage from './pages/HistoryPage';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/profile' element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        } />
        <Route path='/chat' element={
          <ProtectedRoute>
            <ChatPage />
          </ProtectedRoute>
        } />
        <Route path='/history' element={
          <ProtectedRoute>
            <HistoryPage />
          </ProtectedRoute>
        } />
        <Route path='/history/:id?' element={
          <ProtectedRoute>
           <ChatPage />
          </ProtectedRoute>
        } />
      </Route>
    </Routes>
  </HashRouter>
)

