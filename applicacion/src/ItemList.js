import {useState} from "react"

function Item (){
    let [item,setItem] = useState ([
        {id: 1, title:' ---productouno---       ', price: " *precio: 50*      " ,pictureUrl: "Picture URL"},
    ])
    
    return <ol>
        {item.map(u=><li key={u.id}>{u.title}{u.price}{u.pictureUrl}</li>)}
        </ol>
}
export default Item