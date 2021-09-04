import ItemDetailContainer from "../ItemDetailContainer"
import ItemList from "../ItemList"


const ItemListContainer  = (props) => {
    const  {nombre,apellido} = props
    
    return(
        <>
            <h2>Bienvenido {nombre+ " "+apellido}</h2>
            <ItemList/>
            <h2>Detalles del producto</h2>
            <ItemDetailContainer/>
        </>
    )
}
export default ItemListContainer