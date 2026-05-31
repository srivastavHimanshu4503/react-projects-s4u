import ProductDescription from "./ProductDescription";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";


const Product = ({ product }) => {
    return (
        <div className="flex bg-black rounded-2xl mb-5 w-full">
            <ProductImage imgUrl={product.image}/>
            <ProductDescription desc={product} />
            <ProductPrice price={product.price} originalPrice={product.originalPrice} discount={product.discount} />
        </div>
    )
}

export default Product;