
import {useState, useEffect} from "react"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer (){

    const [item,setItem] = useState(1)

    const promesaEj = () => {
      return new Promise((res, rej) => {
        setTimeout(() =>
          res([
            {id: 'i1', dtitle:'Detalle1',
              dprice: " *Detalle2*      ",
              dpictureUrl: "Picture URL"},
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
        {item.map(it => <ItemDetail dId={it.id}dtitle={it.dtitle} dprice={it.dprice} dpictureUrl={it.dpictureUrl}/> )}
        </ol>)
}
export default ItemDetailContainer
