import React, {Fragment} from 'react';
import ReactDOM from 'react-dom'
import Item from './Item.js'

import './Itemlist.css';
import flechaAside from '../assets/flechasumar.png';
const ItemList = (productos) => {
    console.log(productos)
    return ( 
       <Fragment>
           <section className="seccion__productos">
            <div className="productos__grid">
                <aside className="productos__filtroaside">
                    <div className="productos__filtrado">
                        <details>
                            <summary>Netbooks <span className="producto__flecha"><img src={flechaAside} alt=""/></span></summary>
                            <a id="netbooksAside" className="productos__a" href="">Netbooks()</a>
                        </details>
                        <details>
                            <summary>Componenetes de pc <span className="producto__flecha"><img src={flechaAside} alt=""/></span></summary>
                            <a id="procesadoresAside" className="productos__a" href="">Procesadores()</a>
                            <a id="mothersAside" className="productos__a" href="">Mothers()</a>
                            <a id="ramsAside" className="productos__a" href="">Rams()</a>
                            <a id="graficasAside" className="productos__a" href="">Graficas()</a>
                            <a id="almacenamientoAside" className="productos__a" href="">Almacenamiento()</a>
                            <a id="fuentesAside" className="productos__a" href="">Fuentes()</a>
                        </details>
                        <details>
                            <summary>Perifericos  <span className="producto__flecha"><img src={flechaAside} alt=""/></span></summary>
                            <a id="mousesAside" className="productos__a" href="">Mouses()</a>
                            <a id="tecladosAside" className="productos__a" href="">Teclados()</a>
                            <a id="auricularesAside" className="productos__a" href="">Auriculares()</a>
                        </details>
                        <details>
                            <summary>Consolas <span className="producto__flecha"><img src={flechaAside} alt=""/></span></summary>
                            <a id="microsoftAside" className="productos__a" href="">Microsoft()</a>
                            <a id="sonyAside" className="productos__a" href="">Sony()</a>
                        </details>
                    </div>
                </aside>
                <section> 
                <form id="buscador">
                    <div className="buscador__flex">
                        <div className="buscadores">
                            <select className="" id="marca">
                                <option value="">Seleccione marca</option>
                                <option value="logitech">Logitech</option>
                                <option value="redragon">Redragon</option>
                                <option value="razer">Razer</option>
                                <option value="hiperex">HipereX</option>
                                <option value="amd">AMD</option>
                                <option value="microsoft">Microsoft</option>
                                <option value="sony">Sony</option>
                                <option value="gigabyte">Gigabyte</option>
                                <option value="aerocool">Aerocool</option>
                                <option value="intel">Intel</option>
                                <option value="asus">Asus</option>
                                <option value="fury">Fury</option>
                                <option value="kingston">Kingston</option>
                                <option value="westernDigital">Western-Digital</option>
                                <option value="samsung">Samsung</option>
                                <option value="msi">MSI</option>
                                <option value="seasonic">Seasonic</option>
                                <option value="gamemax">Gamemax</option>
                                <option value="syx">SYX</option>
                            </select>
                        </div>
                        <div className="buscadores">
                            <select className="" id="minimo">
                                    <option value="">Seleccione precio MIN</option>
                                    <option value="1000">1000</option>
                                    <option value="10000">10000</option>
                                    <option value="20000">20000</option>
                                    <option value="50000">50,000</option>
                                    <option value="60000">60,000</option>
                                    <option value="70000">70,000</option>
                                    <option value="80000">80,000</option>
                                    <option value="90000">90,000</option>
                            </select>
                        </div>
                        <div className="buscadores">
                            <select className="" id="maximo">
                                    <option value="">Seleccione precio MAX</option>
                                    <option value="20000">20,000</option>
                                    <option value="30000">30,000</option>
                                    <option value="40000">40,000</option>
                                    <option value="50000">50,000</option>
                                    <option value="60000">60,000</option>
                                    <option value="70000">70,000</option>
                                    <option value="80000">80,000</option>
                                    <option value="90000">90,000</option>
                            </select>
                        </div>
                    </div>
                </form>

                <div className="productos__cardgrid" id="productos">
                    <Item productos = {productos}/>
                </div>
            </section> 
            </div>    
        </section>
       </Fragment>
     );
} 
export default ItemList;