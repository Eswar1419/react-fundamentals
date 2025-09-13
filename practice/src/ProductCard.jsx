function ProductCard({product, price, Avilable}) {

    return (
        <div>
            <p>productname:{product}</p>
            <p>price:{price}</p>
            <p>isAvilable:{Avilable === true ? "in stoke" : "out of stoke"} </p>
        </div>
    )

}
export default ProductCard