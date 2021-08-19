import CartWidget from "./CartWidget"
import ItemList from "./assests/ItemListContainer"

const Nav  = () => {
    return(
            <header>
            <div>
                <CartWidget/>
            <h1>PhotoKua</h1>
            </div>
            <ItemList nombre= "Carlos" apellido = "Perez"/>
            <nav>
               <ul>
                   <li>Servicios</li>
                   <li>Resultados</li>
                   <li>Sobre Nosotros</li>
                   <li>Contáctanos</li>
               </ul>
            </nav>
        </header>           
    )
}
export default Nav