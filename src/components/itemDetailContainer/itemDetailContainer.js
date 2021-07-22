import {useState, useEffect} from "react"
import { useParams } from "react-router";
import { DList } from "../../components/itemDetail/itemDetail"
import Loader from "react-loader-spinner";
import {database} from '../../Firebase/firebase'
// import Data from "../../data/data.json"

export const DContainer = () => { 
  const [item, setItem] = useState('')
  const [loading, setLoading] = useState(true)
  const {id} = useParams()
  console.log(loading);

  useEffect(()=> {
    const db = database;

    const itemCollection = db.collection("Productos")
    const item = itemCollection.doc(id);

    item.get().then((doc) => {
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
    <>
        {
          item.length === 0 ? (
              <Loader type="Grid" color="#ff4500" height={120} width={120} /> 
          ) : (
            <div>
                  <DList item={item}/>
            </div>
          )
        }
      </>
    )
  
  };