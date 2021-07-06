import {useState, useEffect} from "react"
import { useParams } from "react-router";
import { DList } from "../../components/itemDetail/itemDetail"
import Data from "../../data/data.json"
import Loader from "react-loader-spinner";

export const DContainer = () => {
  const {id} = useParams()
  const [item, setItem] = useState([])

      useEffect(() => {

        const nuevaPromesa = new Promise((resolve, rej) => {

            setTimeout(() => {
              const getItem = () => {
                // eslint-disable-next-line
                return id ? Data.find((producto) => producto.id == id) : Data
              }

                const item = getItem()
                setItem(item)
              resolve(item)
            }, 2000);
          });

            nuevaPromesa.then((resolve) => {
              setItem(resolve);
            }
          );

  // eslint-disable-next-line
      },[id])
      return(
      <>
        {item.length === 0 ? (
          <Loader type="Grid" color="#ff4500" height={120} width={120} /> 
        ) : ( 
          <DList item={item}/>
        )}
      </>
    )
  
  };