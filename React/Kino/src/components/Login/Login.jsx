import { useState } from 'react';
import styles from './Login.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';

function Login({ onLogin }) {
  const [name, setName] = useState('');

  const handleLoginClick = () => {
    if (name.trim()) {
      onLogin(name);
      setName('');
    }
  };

  return (
    <div className={styles['login-body']}>
      <h1>Вход</h1>
      <div className={styles['login']}>
      <Input
        type="text"
        value={name}
        onChange={(value) => setName(value)}
        placeholder="Ваше имя"
      />
      <Button onClick={handleLoginClick} text="Войти в профиль" />
      </div>
    </div>
  );
}

export default Login;

