
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

    return getItems === 1 ? (
      <p>cargando</p>
    ) : (<ol>
           <ItemDetail/>
        </ol>)

    function ItemDetailContainer (){
    promesaEj.then(response => {
    const valorParseado = response.json()
    return valorParseado
    }
    .then(json=> console.log (ItemDetailContainer)
    
}
promesaEj.then(json=> console.log (JSON)

export default getItems
