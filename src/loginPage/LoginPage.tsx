// src/components/LoginPage.tsx
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hook';
import { login } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';
import style from './LoginPage.module.scss';
import Button from '../components/button/Button';
import NameIcon from '../assets/images/logo.svg';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authStatus = useAppSelector((state) => state.auth.status);
  const authError = useAppSelector((state) => state.auth.error);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    if (authStatus === 'succeeded') {
      navigate('/');
    }
  }, [authStatus, navigate]);

  return (
    <div className={style.loginPage}>
      <div className={style.logoContainer}>
        <NameIcon className={style.logo} />
      </div>
      <form onSubmit={handleSubmit} className={style.loginForm}>
        <div className={style.formGroup}>
          <label htmlFor="username"></label>
          <input
            placeholder="Login"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="password"></label>
          <input
            placeholder="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit">Login</Button>
        {authStatus === 'loading' && <p>Loading...</p>}
        {authStatus === 'failed' && <p className={style.error}>{authError}</p>}
      </form>
    </div>
  );
}

export default LoginPage;
