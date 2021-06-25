import './itemListContainer.css'
import { List } from '../ItemList/itemList'
import {useState, useEffect} from "react"
export const Container = () => {
    
    const [items, setItems]= useState([]);
    
    useEffect (() => {
        const Productos = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve ([
                          {
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
                        ])
                reject('')
            }, 2000);
    })
    
    Productos.then((itemsList) => {
        setItems(itemsList)
    })
    return (
        <>
            <List items={items}/>
        </>
    ) 
    
    })
}
