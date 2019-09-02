import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const perfil = 'Perfil'
const cuenta = 'Cuenta'
const cerrarSesion = 'Cerrar Sesión'

const Header = () => (
    <header className="header">
    <img className="header__img" src={logo} alt="Platzi Video" />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="" />
        <p>{perfil}</p>
      </div>
      <ul>
        <li><a href="/">{cuenta}</a></li>
        <li><a href="/">{cerrarSesion}</a></li>
      </ul>
    </div>
  </header>
);
 
export default Header;