
const ProductImage = ({ imgUrl }) => {
  return (
    <div className="flex justify-center items-center w-75">
        <img src={imgUrl}
        className="size-32"></img>
    </div>
  )
}

export default ProductImage
