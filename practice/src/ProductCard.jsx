import "./index.css"
function ProductCard(Product) {
    return (
        <div className="container">
        
            <p className="title">productname:{Product.product}</p>
            <p className="price">price:{Product.price}</p>
            <p >{Product.Avilable === true ? <p className='in_stoke'>instoke </p>:<p className='stoke'>out of stoke </p>} </p>
        </div>
    )

}
export default ProductCard