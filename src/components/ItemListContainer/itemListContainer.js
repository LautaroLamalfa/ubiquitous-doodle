import './itemListContainer.css'
import { List } from '../ItemList/itemList'
import {useState, useEffect} from "react"


export const Container = () => {
  const [catalogo, setCatalogo] = useState([])
    const Productos = [{
        id: '1', 
        title: 'Sofa', 
        description: 'marron,', 
        stock: '3',
        price: '$60',
        pictureURL: ''
      },
      {
        id: '2', 
        title: 'Television', 
        description: '55 pulgadas', 
        stock: '3',
        price: '$120',
        pictureURL: '' ,
      },
      {
        id: '3', 
        title: "Marvel's The Avengers", 
        description: 'Blu-ray o en version digital', 
        stock: '10',
        price: '$15',
        pictureURL:'',
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

  
    return(
      <>
        {List.length === 0 ? (
          <span>Cargando...</span>
        ) : (
        <List items={catalogo}/>
        )}
      </>
    )
  
};
