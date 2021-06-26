import './itemListContainer.css'
import { List } from '../ItemList/itemList'
import {useState} from "react"


export const Container = () => {
  const [catalogo, setCatalogo] = useState([])
    const Productos = [{
        id: '1', 
        title: 'sofa', 
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

  const nuevaPromesa = new Promise((resolve, rej) => {

    setTimeout(() => {
      resolve(Productos)
    }, 2000);
  })  

  nuevaPromesa.then((resolve) => {
    console.log(resolve);
    setCatalogo(resolve)
  })

  
    return(
      <>
        <List items={catalogo}/>
      </>
    )
  
};
