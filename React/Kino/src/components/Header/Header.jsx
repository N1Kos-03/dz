import './Header.css';
function Header() {
  return (
    <div className='header-menu'>
     <img className='logo' src="./public/logo.svg" alt="Логотип" />
      <ul className='header-menu__list'>
        <li className='header-menu__item'><a href="#">Поиск фильмов</a></li>
        <li className='header-menu__item'><a href="#">Мои фильмы</a></li>
        <li className='header-menu__item header-menu__login'><a href="#">Войти<img src="./public/login.svg" alt="Войти"/></a></li>
      </ul>
    </div>
      
 );
}

export default Header;