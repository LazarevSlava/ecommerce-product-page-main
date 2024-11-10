import './App.scss';
import { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hook';
import Header from './components/header/Header';
import ViewOfItem from './components/viewOfItem/ViewOfItem';
import LoginPage from './loginPage/LoginPage';
import { fetchProducts } from './productAction';

function App() {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) {
      dispatch(fetchProducts());
    }
  }, [token, dispatch]);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          token ? (
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
