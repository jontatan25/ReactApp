
const Item= (props) => {
    const  {dId,dtitle,dprice,dpictureUrl} = props
    return(
        <>
            <li id={dId}>{dtitle}{dprice}{dpictureUrl}</li>
        </>
    )
  }
  export default Item