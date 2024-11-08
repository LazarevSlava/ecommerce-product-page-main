import './App.scss';
import { useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Header from './components/header/Header';
import ViewOfItem from './components/viewOfItem/ViewOfItem';
import { fetchProducts } from './productAction';
import { useAppDispatch } from './hook';
import LoginPage from './loginPage/LoginPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (username: string, password: string) => {
    if (username === '1' && password === '1') {
      setIsAuthenticated(true);
      dispatch(fetchProducts());
      navigate('/');
    } else {
      alert('Wrong login or password');
    }
  };

  return (
    <Routes>
      <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <>
              <Header />
              <ViewOfItem />
            </>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
}

export default App;
