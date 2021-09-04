
import {useState, useEffect} from "react"
import ItemDetail from "./ItemDetail"

function getItems (){

    const [item,setItem] = useState(1)

    const promesaEj = () => {
      return new Promise((res, rej) => {
        setTimeout(() =>
          res([
            {id: 1, title:'---productouno---',
              price: " *precio: 50*      ",
              pictureUrl: "Picture URL"},
          ]), 2000
        )
      })
    }
    useEffect(() => {
      promesaEj().then((data) => {
        setItem(data)
      })
    },[])

    return item === 1 ? (
      <p>cargando</p>
    ) : (<ol>
        {item.map(it => <Item title={it.title} price={it.price} pictureUrl={it.pictureUrl}/> )}
        </ol>)
}
export default ItemList
  return getItems
