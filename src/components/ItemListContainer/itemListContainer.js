import { List } from '../ItemList/itemList'
import Loader from "react-loader-spinner";
import { useEffect, useState } from 'react';
import {database} from '../../Firebase/firebase'

export const Container = () => {
  // eslint-disable-next-line
  const[loading, setloading] = useState(true) 
  const[items, setItems] = useState() 

  useEffect(() => {
    const db = database;
    const itemCollection = db.collection("Productos");
    itemCollection.get().then((querySnapshot) => {
      setItems(querySnapshot.docs.map(doc => doc.data()));
    }).catch((error) => {
      console.log("Error searching items", error);
    }).finally(() => {
      setloading(false);
    });

  })
  
    return(
      <>
        {items === undefined ? <Loader type="Circles" color="#00BFFF" height={120} width={120} /> : <List items = {items}/>}
      </>
    )
  };