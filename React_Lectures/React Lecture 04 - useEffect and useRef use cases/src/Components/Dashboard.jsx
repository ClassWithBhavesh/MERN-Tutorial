import React, { useEffect, useState } from "react";

function Dashboard() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const PRODUCT_API_URL = "https://dummyjson.com/products";

  useEffect(() => {
    fetch(PRODUCT_API_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setOrders(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <h2>Data loading from the API...</h2>
      ) : (
        <div>
          <p>{orders.products[0].id}</p>
          <p>{orders.products[0].title}</p>
          <p>{orders.products[0].description}</p>
        </div>
      )}
    </>
  );
}

export default Dashboard;
