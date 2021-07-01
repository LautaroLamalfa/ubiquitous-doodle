import {useState, useEffect} from "react"
import { useParams } from "react-router";
import './itemListContainer.css'
import { List } from '../ItemList/itemList'


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
        pictureURL: '',
        categoryId: 'Ambiente'
      },
      {
        id: '2', 
        title: 'Television', 
        description: '55 pulgadas', 
        stock: '3',
        price: '$120',
        pictureURL: '',
        categoryId: 'Televisores'
      },
      {
        id: '3', 
        title: "Marvel's The Avengers", 
        description: 'Blu-ray o en version digital', 
        stock: '10',
        price: '$12',
        pictureURL: '',
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
      
      nuevaPromesa.then((resolve) => {
        console.log(resolve);
        setCatalogo(resolve)
      })
// eslint-disable-next-line
    },[])
    
//     useEffect(() => { 
//       const getCatalogo = () => {
//         return id ? Productos.filter((item) => item.categoryId === id) : Productos
//       }
      
//       const items = getCatalogo()
//       setCatalogo(items)
// // eslint-disable-next-line
//     }, [id])
    
    return(
      <>
        {catalogo.length === 0 ? (
          <span>Cargando...</span>
        ) : (
        <List items={catalogo}/>
        )}
      </>
    )
    
  };
  