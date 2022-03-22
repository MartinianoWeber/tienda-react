import React, {Fragment, useState} from 'react'
import './Counter.css';

function Count() {
     // LOGICA DEL CONTADOR
        const[count, setCount] = useState(1)
        const stock = 4
        console.log(count)
        function contador(){
             if(count === 1){
                return(
                    <div className="contenedorBtn">
                    <button onClick={() => setCount(count)}>-</button>
                        <h1>{count}</h1>
                    <button onClick={() => setCount(count+1)}>+</button>
                </div> 
                )
                
            }
            if(count < stock){
                return(
                    <div className="contenedorBtn">
                    <button onClick={() => setCount(count-1)}>-</button>
                        <h1>{count}</h1>
                    <button onClick={() => setCount(count+1)}>+</button>
                </div> 
                )
            }else{
                return(
                    <div className="contenedorBtn">
                    <button onClick={() => setCount(count-1)}>-</button>
                        <h1>{count}</h1>
                    <button onClick={() => setCount(count)}>+</button>
                </div> 
                )
                
            } 
           
        }
        
    return (
      <Fragment>
         {contador()}
      </Fragment>
    );
  }
  
  export default Count;
  
