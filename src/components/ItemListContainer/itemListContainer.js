import {useState, useEffect} from "react"
import { List } from '../ItemList/itemList'
import { useParams } from "react-router";
import Loader from "react-loader-spinner";
import Data from "../../data/data.json"

export const Container = () => {
  const {id} = useParams()
  const [catalogo, setCatalogo] = useState()

  console.log(id);
   
    useEffect(() => {
      const nuevaPromesa = new Promise((resolve, rej) => {
        setTimeout(() => {
          resolve(Data.filter((item) => item.id === id))
        }, 2000);
      });
        nuevaPromesa.then((item) => {
          setCatalogo(item);
      });
// eslint-disable-next-line
    },[id])
    
    return(
      <>
        {catalogo.length === 0 ? (
          <Loader type="Circles" color="#00BFFF" height={80} width={80} /> 
        ) : (
        <List items={catalogo}/>
        )}
      </>
    )
}
  