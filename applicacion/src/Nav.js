import CartWidget from "./CartWidget"

const Nav  = (props) => {
    const  {nombre,apellido} = props
    return(
            <header>
            <div>
                <CartWidget/>
            <h1>PhotoKua</h1>
            </div>
            <h2>Bienvenido {nombre+ " "+apellido}</h2>
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