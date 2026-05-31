const ProductPrice = ({ price, originalPrice, discount }) => {
    return (
        <div className="flex flex-col justify-center w-42.5 items-center">
            <h3 className="text-white text-xl font-medium">{price}</h3>
            <p className="line-through text-[0.8rem]">{originalPrice}</p>
            <p className="text-green-400 text-[0.8rem]">{discount}</p>
        </div>
    )
}

export default ProductPrice