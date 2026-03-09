import { memo } from "react";

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "8px",
    width: "200px",
  },
};

function ProductCard({ product_name, product_price, addToCart }) {

    console.log(`Rendering : ${product_name}`);

  return (
    <div style={styles.card}>
      <h3>{product_name}</h3>
      <p>₹{product_price}</p>
      <button onClick={() => addToCart(product_name)}>Add To Cart</button>
    </div>
  );
}

export default memo(ProductCard);
