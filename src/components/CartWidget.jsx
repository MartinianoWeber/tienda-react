import React from 'react';
import carrito from '../assets/carrito-de-compras.png'
const CartWidget = () => {
    return ( 
        <div className="productos__carritos">
            <a className="productos__carritolink" href=""><img src={carrito} alt=""></img></a> 
        </div>
     );
}
 
export default CartWidget;