import React, {Fragment} from 'react'
import './item.css';
import background from '../assets/background.png';
function Item({productos}) {    
    return ( 
        <Fragment>
        {productos.productos.map((productos)=>    
       
            <div key={productos.id} className="productos">
            <span className="producto__imagen" style={{backgroundImage: `url(${productos.imagen})`}} ></span>
            
                <span className="producto__background" >
                    <span className="productos__contenido">
                         <img className="productos__backgroundB" src={background} alt=""/>
                         <div className="texto__producto">
                            <h4>{productos.nombrecorto}</h4>
                            <div className="linea"></div>
                            <p>Valor: ${productos.precio}</p>
                            <a className="btnInformacion" href='#'>Mas Informacion</a>
                        </div>
                        <span className="boton__añadir">
                            <a id="btnAñadir" href="#">Añadir al carrito</a>
                        </span>
                    </span>
            </span>
            </div>

        
        )}
        </Fragment>  

     );
}

export default Item;