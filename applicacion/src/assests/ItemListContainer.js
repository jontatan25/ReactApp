import ItemList from "../ItemList"

const ItemListContainer  = (props) => {
    const  {nombre,apellido} = props
    
    return(
        <>
            <h2>Bienvenido {nombre+ " "+apellido}</h2>
            <ItemList/>
        </>
    )
}
export default ItemListContainer