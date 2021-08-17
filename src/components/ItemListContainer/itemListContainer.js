import { List } from '../2temList/itemList'
import Loader from "react-loader-spinner";
import { Fragment, useEffect, useState } from 'react';
import {database} from '../../Firebase/firebase'
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {
  const [loading, setloading] = useState(true) 
  const [items, setItems] = useState([]) 
  const {id} = useParams()

  console.log(id);
  console.log(loading);
  useEffect(() => {
    const db = database;
    const itemCollection = db.collection("Productos");
    let catalogo
    id? catalogo = itemCollection.where('categoryId','==', id) : catalogo=itemCollection
    catalogo.get().then((querySnapshot)=> {

      const filtrados = querySnapshot.docs.map(doc => ( {id: doc.id, ...doc.data() }))
      setItems(filtrados)
    }).catch((error) => {
      console.log("Error searching items", error);
    }).finally(() => {
      setloading(false);
    });

    
  }, [id]);
  
    return(
      <Fragment>
        {
          items.length === 0 ? (
               <Loader type="Circles" color="#00BFFF" height={120} width={120} />
             
             ) : (<List items = {items}/>)
        }
      </Fragment>
    )
  }