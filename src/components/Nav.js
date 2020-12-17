import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Btn } from './Btn';
import './Nav.css';

const Nav = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [btn, setBtn] = useState(true);

  const toggleClickHandler = () => setIsClicked(!isClicked);
  const closeMenu = () => setIsClicked(false);
  const displayBtn = () => {
    if (window.innerWidth <= 960) {
      setBtn(false);
    } else {
      setBtn(true);
    }
  };

  window.addEventListener('resize', displayBtn);

  return (
    <>
      <nav className="nav">
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            <img
              className="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Seal_Taraz.svg"
              alt="logo"
            />
          </Link>
          <div className="hamburger-icon" onClick={toggleClickHandler}>
            <i className={isClicked ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={isClicked ? 'nav-menu show' : 'nav-menu'}>
            <li className="nav-i">
              <Link to="/" className="nav-links" onClick={closeMenu}>
                Главная
              </Link>
            </li>
            <li className="nav-i">
              <Link to="/places" className="nav-links" onClick={closeMenu}>
                Места
              </Link>
            </li>
            <li className="nav-i">
              <Link to="/shopping" className="nav-links" onClick={closeMenu}>
                Шоппинг
              </Link>
            </li>

            <li className="nav-i">
              <Link
                to="/order"
                className="nav-links-mobile"
                onClick={closeMenu}
              >
                Заказать
              </Link>
            </li>
          </ul>
          {btn && (
            <Btn linkTo="/signup" btnStyle="btn--outline">
              Регистрация
            </Btn>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
