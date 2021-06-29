import {useState, useEffect} from "react"
import { DList } from "../itemDetail/itemDetail"


export const dContainer = () => {
    const [item, setItem] = useState()
      const Producto = { 
          title: 'Sofa', 
          description: 'marron,', 
          stock: '3',
          price: '$60',
          pictureURL: ''
        }  
  
      useEffect(() => {
        const nuevaPromesa = new Promise((resolve, rej) => {
      
          setTimeout(() => {
            resolve(Producto)
            rej()
          }, 2000);
        })
      
        nuevaPromesa.then((resolve) => {
          console.log(resolve);
          setItem(resolve)
        })
  // eslint-disable-next-line
      },[])
  
    
      return(
        <>
          <DList items={item}/>
        </>
      )
    
  };