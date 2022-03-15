import React from "react";
import logo from '../assets/logoGeek.png'
import './Navbar.css';

function ModuloNav(){
    return (
        <div className="fijo">
        <nav className="navBar">
            <div>
            <img className="nav__img" src={logo} alt=""></img>
            </div>
            <div className="navbar__items">
                <a href="#">Productos</a>
                <a href="#">Armar mi PC</a>
                <a href="#">Contacto</a>
            </div>
        </nav>
    </div>
    )
   
} 
export default ModuloNav
