import React from 'react'

import '../assets/styles/components/Footer.scss';

const terminos = 'Terminos de uso'
const declaracion = 'Declaracion de privacidad'
const ayuda = 'Centro de ayuda'

const Footer = () => (
    <footer className="footer">
    <a href="/">{terminos}</a>
    <a href="/">{declaracion}</a>
    <a href="/">{ayuda}</a>
  </footer>
)
 
export default Footer;