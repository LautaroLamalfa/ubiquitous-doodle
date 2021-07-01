import './itemListContainer.css'
import {useState, useEffect} from "react"
import { List } from '../ItemList/itemList'
import { useParams } from "react-router";
import Loader from "react-loader-spinner";
import {One} from '../../Assets/Imagenes/imagenes'
import {Two} from '../../Assets/Imagenes/imagenes'
import {Three} from '../../Assets/Imagenes/imagenes'


export const Container = () => {
  const {id} = useParams()
  const [catalogo, setCatalogo] = useState([])

  console.log(id);
  
    const Productos = [{
        id: '1', 
        title: 'Sofa', 
        description: 'Marron', 
        stock: '3',
        price: '$60',
        picture: Two,
        categoryId: 'Ambiente'
      },
      {
        id: '2', 
        title: 'Television', 
        description: '55 pulgadas', 
        stock: '3',
        price: '$120',
        picture: Three,
        categoryId: 'Televisores'
      },
      {
        id: '3', 
        title: "Marvel's The Avengers", 
        description: 'Blu-ray o en version digital', 
        stock: '10',
        price: '$12',
        picture: One,
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
          <Loader type="Circles" color="#00BFFF" height={80} width={80} /> 
        ) : (
        <List items={catalogo}/>
        )}
      </>
    )
  };
  