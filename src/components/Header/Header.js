// import {useState} from 'react';
// import {FaUserAlt, FaRegEnvelope, FaSignInAlt, FaList, FaRegTimesCircle} from 'react-icons/fa';
import {Link, NavLink} from 'react-router-dom';
import HeaderSearchForm from '../HeaderSearchForm/HeaderSearchForm';
import Account from '../Account/Account';

import './header.scss';
import logo from '../../resources/img/logo/logo.png';
// import avatar from '../../resources/img/menu icons/avatar.jpeg';

const Header = () => {

    // const [activeUserMenu, setActiveUserMenu] = useState(false);


    // const onOpen = () => {
    //     setActiveUserMenu(true);
    // }

    // const onClose = () => {
    //     setActiveUserMenu(false);
    // }
    console.log('header');

    // const searchFormClasses = `search-form ${activeInput ? 'search-form__active' : ''}`;


    return (
        <header className="header">
            <div className="container header__container">
                <Link to="/" href="#" className="logo-link">
                    <img src={logo} alt="" className="header__logo"/>
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
                                <i className="menu__svg fa-solid fa-music"></i>
                                <div className="menu__item-text">Watch list</div>
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <HeaderSearchForm/>
                <Account/>
                {/* <button className="header__login" onClick={() => onOpen(setActiveUserMenu)}>
                        <img src={avatar} alt="avatar" className=""/>
                </button>
                <div className={`account ${activeUserMenu ? 'active' : ''}`}>
                    <div className="account__header">
                        <button className="btn-reset account__btn-close" onClick={() => onClose(setActiveUserMenu)}><FaRegTimesCircle className="account__btn-close--icon"/></button>
                        <div className="account__avatar">
                            <img src={avatar} alt="avatar" className=""/>
                        </div>
                        <div className="account__email">example@email.com</div>
                    </div>
                    <nav className="account-menu">
                    <ul className="account-menu__list list-reset">
                        <div className="account-menu__divider"></div>
                        <li className="account-menu__list-item">
                            <FaUserAlt className="account-menu__icon"/>
                            <a href="#" className="account-menu__link">Profile</a>
                        </li>
                        <div className="account-menu__divider"></div>
                        <li className="account-menu__list-item">
                            <FaList className="account-menu__icon"/>
                            <a href="#" className="account-menu__link">Watchlist</a>
                        </li>
                        <div className="account-menu__divider"></div>
                        <li className="account-menu__list-item">
                            <FaRegEnvelope className="account-menu__icon"/>
                            <a href="#" className="account-menu__link">Message's</a>
                        </li>
                        <div className="account-menu__divider"></div>
                        <li className="account-menu__list-item">
                            <FaSignInAlt className="account-menu__icon warning"/>
                            <a href="#" className="account-menu__link warning">Log out</a>
                        </li>
                    </ul>
                    </nav>
                </div> */}
            </div>
        </header>
    )
};

export default Header;