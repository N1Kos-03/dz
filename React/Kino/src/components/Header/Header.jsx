import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles['header-menu']}>
      <img className={styles['logo']} src="./public/logo.svg" alt="Логотип" />
      <ul className={styles['header-menu__list']}>
        <li className={styles['header-menu__item']}>
          <a href="#">Поиск фильмов</a>
        </li>
        <li className={styles['header-menu__item']}>
          <a href="#">Мои фильмы</a>
        </li>
        <li className={`${styles['header-menu__item']} ${styles['header-menu__login']}`}>
          <a href="#">
            Войти
            <img src="./public/login.svg" alt="Войти" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
