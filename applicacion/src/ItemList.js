import {useState, useEffect} from "react"
import Item from "./Item"

function ItemList (){

    const [item,setItem] = useState(1)

    const promesaEj = () => {
      return new Promise((res, rej) => {
        setTimeout(() =>
          res([
            {id: 1, title:'---productouno---',
              price: " *precio: 50*      ",
              pictureUrl: "Picture URL"},
              {id: 2, title:'---productodos---',
                price: " *precio: 50*      ",
                pictureUrl: "Picture URL"},
                {id: 3, title:'---productotres---',
                  price: " *precio: 50*      ",
                  pictureUrl: "Picture URL"},
          ]), 3000
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
        {item.map(it => <Item id={it.id}title={it.title} price={it.price} pictureUrl={it.pictureUrl}/> )}
        </ol>)
}
export default ItemList
