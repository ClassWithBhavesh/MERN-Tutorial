import { useState, useCallback } from "react"
import ProductCard from "./ProductCard";

const products = [
  {prod_id: 1121, prod_name: 'Wireless Headphones', prod_price: 2999},
  {prod_id: 1122, prod_name: 'sunglasses', prod_price: 499},
  {prod_id: 1123, prod_name: 'iPhone 18 pro max', prod_price: 18999},
  {prod_id: 1124, prod_name: 'Macbook M4', prod_price: 99999},
  {prod_id: 1125, prod_name: 'Apple Airpods', prod_price: 9999},
  {prod_id: 1126, prod_name: 'Wired Headphones', prod_price: 4999},
  {prod_id: 1128, prod_name: 'Wireless Keyboard', prod_price: 1299},
  {prod_id: 1129, prod_name: 'Wireless Mouse', prod_price: 999}
]

const styles = {
  container: {
    padding: "40px",
    fontFamily: "sans-serif",
  },
  grid: {
    display: "flex",
    gap: "20px",
    flexWrap: 'wrap'
  }
};

function Products() {

  const [cartCount, setCartCount] = useState(0);

  const addToCart = useCallback((product_name) => {
    setCartCount(prev => prev + 1);
    // setCartCount(prev => prev + 1);
    // setCartCount(prev => prev + 1);
    // setCartCount(prev => prev + 1);
    // setCartCount(prev => prev + 1);
    console.log(`${product_name} Added!`);
  }, []);

  return (
    <div style={styles.container}>
        <h1>SlayVana Store</h1>
        <p>Cart Items - {cartCount}</p>
        <div style={styles.grid}>
          {
            products.map((product) => (
              <ProductCard key={product.prod_id} addToCart={addToCart} product_name={product.prod_name} product_price={product.prod_price} />
            ))
          }
        </div>
    </div>
  )
}

export default Products