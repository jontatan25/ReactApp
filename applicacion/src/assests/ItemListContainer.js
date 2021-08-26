import Item from "../ItemList"

const ItemList  = (props) => {
    const  {nombre,apellido} = props
    
    return(
        <>
            <h2>Bienvenido {nombre+ " "+apellido}</h2>
            <Item/>
        </>
    )
}
export default ItemList