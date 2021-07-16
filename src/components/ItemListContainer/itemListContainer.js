import { List } from '../ItemList/itemList'
import Loader from "react-loader-spinner";
import { useEffect, useState } from 'react';
import {database} from '../../Firebase/firebase'

export const Container = () => {
  const[loading, setloading] = useState() 
  const[items, setItems] = useState() 

  useEffect(() => {
    setloading(true);
    const db = database();
    const itemCollection = db.collection("Productos");
    itemCollection.get().then((querySnapshot) => {
      setItems(querySnapshot.docs.map(doc => doc.data()));
    }).catch((error) => {
      console.log("Error searching items", error);
    }).finally(() => {
      setloading(false);
    });

  })


    // useEffect(() => {
    //   const db = getFirestore();

    //   const itemCollection = db.collection('items');
    //   const item = itemCollection.doc(itemId)

    //   item.get().then((doc) => {
    //     if (!doc.exists) {
    //       console.log('Item does not exist! :( ');
    //       return;
    //     }
    //     console.log('Item found');
    //     setItems({ id: doc.id, ...doc.data() });
    //   }).catch((error) => {
    //     console.log("Error searching items", error);
    //   }).finally(() => {
    //     setloading(false)
    //   });
    // }, [] )
    return(
      <>
        {items === undefined ? <Loader type="Circles" color="#00BFFF" height={120} width={120} /> : <List items = {items}/>}
      </>
    )
  };