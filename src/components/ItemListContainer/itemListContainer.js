import {useState, useEffect} from "react"
import { List } from '../ItemList/itemList'
import { useParams } from "react-router";
import Loader from "react-loader-spinner";

export const Container = () => {
  const {id} = useParams()
  const [catalogo, setCatalogo] = useState([])

  console.log(id);
  
    const Productos = [
      {
        id: '1', 
        title: 'Sofa', 
        description: 'Marron', 
        stock: '10 unidades',
        price: '$60',
        categoryId: 'Ambiente'
      },
      {
        id: '2', 
        title: 'Television', 
        description: '55 pulgadas', 
        stock: '10 unidades' ,
        price: '$120',
        categoryId: 'Televisores'
      },
      {
        id: '3', 
        title: "Marvel's The Avengers", 
        description: 'Blu-ray o en version digital', 
        stock: '10 unidades',
        price: '$12',
        categoryId: 'Peliculas y Series'
      },
    ]
    
    
    useEffect(() => {
      const nuevaPromesa = new Promise((resolve, rej) => {
        
        setTimeout(() => {
          resolve(Productos)
          rej()
        }, 2000);
      })

      nuevaPromesa.then((Productos) => {
        const detalleProducto = id ? Productos.filter((item) => item.categoryId === id) : Productos 
          setCatalogo(detalleProducto)
      })
      
// eslint-disable-next-line
    },[id])
    
    return(
      <>
        {catalogo.length === 0 ? (
          <Loader type="Circles" color="#00BFFF" height={120} width={120} /> 
        ) : (
        <List items={catalogo}/>
        )}
      </>
    )
  };
  