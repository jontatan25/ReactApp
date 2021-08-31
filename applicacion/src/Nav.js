import CartWidget from "./CartWidget"
import ItemListContainer from "./assests/ItemListContainer"

const Nav  = () => {
    return(
            <header>
            <div>
                <CartWidget/>
            <h1>PhotoKua</h1>
            </div>
            
            <nav>
               <ul>
                   <li>Servicios</li>
                   <li>Resultados</li>
                   <li>Sobre Nosotros</li>
                   <li>Contáctanos</li>
               </ul>
            </nav>
            <ItemListContainer nombre= "Carlos" apellido = "Perez"/>
        </header>           
    )
}
export default Nav