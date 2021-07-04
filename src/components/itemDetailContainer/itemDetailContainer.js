import {useState, useEffect} from "react"
import { DList } from "../../components/itemDetail/itemDetail"
import { useParams } from "react-router";
import Data from "../../data/data.json"

export const DContainer = () => {
  const {id} = useParams()
  const [item, setItem] = useState()
      useEffect(() => {
        const nuevaPromesa = new Promise((resolve, rej) => {
          setTimeout(() => {
            resolve(Data.filter((item) => item.id === id))
          }, 2000);
        });
          nuevaPromesa.then((item) => {
            setItem(item);
        });
  // eslint-disable-next-line
      },[id])
      return(
      <>
        <DList item={item}/>
      </>
    )
  
  };