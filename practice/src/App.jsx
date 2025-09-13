import ProductCard from "./ProductCard"


function App() {

  const productname = "chocolates"
  const price = 999
  const Avilable = true


  return (
    <>
      <ProductCard product={productname} price={price} Avilable={Avilable} />


    </>
  )
}

export default App
