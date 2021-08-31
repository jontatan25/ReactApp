
const Item= (props) => {
  const  {title,price,pictureUrl} = props
  return(
      <>
          <li>{title}{price}{pictureUrl}</li>
      </>
  )
}
export default Item