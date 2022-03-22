import React, {useState, useEffect, Fragment} from 'react'
import ItemList from '../components/ItemList.jsx'
const Api = () => {
    const [productos, setProductos] = useState([])
    useEffect(() =>{
        consumirApi()
        
    }, [])


    const consumirApi = async () => {
        const data = await fetch("json/db.json")
        const dataJson = await data.json()
        setTimeout(() => {
            setProductos(dataJson)
        }, 3000);
        
    }
    
    function loading(){
        if(productos.length > 0){
            return(
               <p>Cargado</p>
            )
        }else{
            return(
                <div className="spinner">
                <span>C</span>
                <span>A</span>
                <span>R</span>
                <span>G</span>
                <span>A</span>
                <span>N</span>
                <span>D</span>
                <span>O</span>
                </div>
            )
        }
        
    }
   
    return(
            <Fragment>
                
                <ItemList productos = {productos}/>
                {loading()}
               
            </Fragment>
            
            
        
    )
    
}





export default Api