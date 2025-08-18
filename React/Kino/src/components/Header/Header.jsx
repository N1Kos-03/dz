import styles from './Header.module.css';

function Header({ user, onLogout }) {
  return (
    <div className={styles['header-menu']}>
      <img className={styles['logo']} src="/logo.svg" alt="Логотип" />
      <ul className={styles['header-menu__list']}>
        <li className={styles['header-menu__item']}>
          <a href="#">Поиск фильмов</a>
        </li>
        <li className={styles['header-menu__item']}>
          <a href="#">Мои фильмы</a>
        </li>
        {user ? (
          <li className={`${styles['header-menu__item']} ${styles['header-menu__onlogout']}`}>
            <span className={styles['header-menu__user']}>{user}
            <img src="/user.svg" alt="Пользователь"/>
            </span>
            <a href='#' onClick={onLogout}>Выйти</a>
          </li>
        ) : (
          <li className={`${styles['header-menu__item']} ${styles['header-menu__login']}`}>
            <a href="#">
              Войти
              <img src="/login.svg" alt="Войти" />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Header;

