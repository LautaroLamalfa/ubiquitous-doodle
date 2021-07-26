import { List } from '../ItemList/itemList'
import Loader from "react-loader-spinner";
import { useEffect, useState } from 'react';
import {database} from '../../Firebase/firebase'
import { useParams } from 'react-router-dom';

export const Container = () => {
  const [loading, setloading] = useState(true) 
  const [items, setItems] = useState([]) 
  const {categoryId} = useParams()

  console.log(categoryId);
  console.log(loading);
  useEffect(() => {
    const db = database;
    const itemCollection = db.collection("Productos");
    let catalogo
    categoryId? catalogo = itemCollection.where('categoryId','==', categoryId) : catalogo=itemCollection
    catalogo.get().then((querySnapshot)=> {

      const filtrados = querySnapshot.docs.map(doc => ( {id: doc.id, ...doc.data() }))
      setItems(filtrados)
    }).catch((error) => {
      console.log("Error searching items", error);
    }).finally(() => {
      setloading(false);
    });

    
  }, [categoryId]);
  
    return(
      <>
        {items === undefined ? <Loader type="Circles" color="#00BFFF" height={120} width={120} /> : <List items = {items}/>}
      </>
    )
  }