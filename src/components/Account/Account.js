import {useState} from 'react';
import {FaUserAlt, FaRegEnvelope, FaSignInAlt, FaList, FaRegTimesCircle} from 'react-icons/fa';

import avatar from '../../resources/img/menu icons/avatar.jpeg';
import './account.scss';

const Account = () => {
    const [activeUserMenu, setActiveUserMenu] = useState(false);


    const onOpen = () => {
        setActiveUserMenu(true);
    }

    const onClose = () => {
        setActiveUserMenu(false);
    }

    return (
        <>
            <button className="header__login" onClick={() => onOpen(setActiveUserMenu)}>
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
            </div>
        </>
    )
}

export default Account;