
const Item= (props) => {
  const  {id,title,price,pictureUrl} = props
  return(
      <>
          <li id={id}>{title}{price}{pictureUrl}</li>
      </>
  )
}
export default Item