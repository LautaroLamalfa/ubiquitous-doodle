import {useState, useEffect, Fragment} from "react"
import { useParams } from "react-router";
import { DList } from "../itemDetail/itemDetail"
import Loader from "react-loader-spinner";
import {database} from '../../Firebase/firebase'
export const ItemDetailContainer = () => { 
  const [item, setItem] = useState('')
  const [loading, setLoading] = useState(true)
  const {id} = useParams()
  console.log(id);
  console.log(loading);

  useEffect(()=> {
    const db = database;

    const itemCollection = db.collection("Productos")
    const producto = itemCollection.doc(id);

    producto.get().then((doc) => {
      if (!doc.exists) {
        console.log("Producto no existe :( ");
        return;
      }
      console.log("Producto Encontrado :) ");
      setItem({ id: doc.id, ...doc.data() })  
    }).catch((error) => {
      console.log("Error buscando items", error);
    }).finally(() => {
      setLoading(false);
    });
  }, [id]);
  
  return(
    <Fragment>
        {
          item.length === 0 ? (
              <Loader type="Grid" color="#ff4500" height={120} width={120} /> 
              
          ) : ( <DList item={item}/> )
        }
      </Fragment>
    )
  
  };