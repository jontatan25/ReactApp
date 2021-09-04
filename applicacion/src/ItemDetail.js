

function ItemDetail(props){

    const  {dTitle,dprice,dpictureUrl} = props
    return(
        <>
            <li>{dTitle}{dprice}{dpictureUrl}</li>
        </>
    )
  }
  export default ItemDetail