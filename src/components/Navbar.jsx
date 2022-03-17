import React, {Fragment} from "react";
import logo from '../assets/logoGeek.png'
import search from '../assets/search.png'
import CartWidget from './CartWidget'
import './Navbar.css';

function ModuloNav(){

    return (
        <Fragment>
                <header className="headerProductos">
        <div className="productos__logo">
                <img src={logo} alt=""></img>
        </div>
        <div className="productos__form">
            <form>
               <span><input type="text" name="" id="buscadorDeproductos" placeholder="Busca tu producto ideal"></input><a className="lupa__busqueda" id="ingresarBusqueda" href=""><img  src={search}></img></a> </span> 
            </form>
        </div>
    </header>
    <section className="navbarproductos">
        <div className="navbar__flex">
            <a href="./index.html">Home</a>
            <a href="./armatupc.html">Armar mi pc</a>
            <a href="./contacto.html">Contacto</a>

        </div>
       <CartWidget/>
    </section>
        </Fragment>
    )
   
} 
export default ModuloNav
