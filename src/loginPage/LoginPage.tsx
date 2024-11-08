import { useState } from 'react';
import style from './LoginPage.module.scss';
import Button from '../components/button/Button';
import NameIcon from '../assets/images/logo.svg';

interface LoginPageProps {
  onLogin: (username: string, password: string) => void;
}

function LoginPage({ onLogin }: LoginPageProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className={style.loginPage}>
      <div className={style.logoContainer}>
        <NameIcon className={style['logo']} />
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
        <Button type="submit">{'Submit'}</Button>
      </form>
    </div>
  );
}

export default LoginPage;
