import React, {useState, useEffect} from 'react'
import ItemList from '../components/ItemList.jsx'
const Api = () => {
    const [productos, setProductos] = useState([])
    useEffect(() =>{
        consumirApi()
    }, [])


    const consumirApi = async () => {
        const data = await fetch("json/db.json")
        const dataJson = await data.json()
        setProductos(dataJson)
    }
   
    return(
        <ItemList productos = {productos}/>
    )
    
}





export default Api