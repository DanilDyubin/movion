import { Link, NavLink } from 'react-router-dom';
import HeaderSearchForm from '../HeaderSearchForm/HeaderSearchForm';
import Account from '../Account/Account';

import './header.scss';
import logo from '../../resources/img/logo/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/" href="#" className="logo-link">
          <img src={logo} alt="" className="header__logo" />
        </Link>
        <nav className="menu header__menu">
          <ul className="menu__list list-reset">
            <li className="menu__item">
              <NavLink end to="/" href="#" className="menu__link">
                <i className="menu__svg fa-solid fa-house"></i>
                <div className="menu__item-text">Home</div>
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink end to="/movies" className="menu__link">
                <i className="menu__svg fa-solid fa-film"></i>
                <div className="menu__item-text">Movies</div>
              </NavLink>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                <i className="menu__svg fa-solid fa-tv"></i>
                <div className="menu__item-text">TV Show</div>
              </a>
            </li>
            <li className="menu__item">
              <NavLink end to="/watchList" className="menu__link">
                <i className="menu__svg fa-solid fa-list"></i>
                <div className="menu__item-text">Watch list</div>
              </NavLink>
            </li>
          </ul>
        </nav>

        <HeaderSearchForm />
        <Account />
      </div>
    </header>
  );
};

export default Header;
