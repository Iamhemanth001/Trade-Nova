/* eslint-disable no-unused-vars */
import React,{ useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Orders.css"

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:8200/orders");
        if (!response.ok) throw new Error("Failed to fetch orders");
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const deleteOrder = async (id) => {
    try {
      const response = await fetch(`http://localhost:8200/orders/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete order");

      setOrders(orders.filter((order) => order._id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

   if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="order-table">
      {orders.length > 0 ? (
        <>
          <h3 className="title">Your Orders</h3>
          <table className="orders-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Mode</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{order.price}</td>
                  <td>{order.mode}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => deleteOrder(order._id)}
                    >
                     <i className="fa-solid fa-trash fa-2xl" style={{color: "#ff0000"}}></i>
                    </button>
                  </td>
                </tr>
              ))} 
            </tbody>
          </table>
          <Link to={"/"} className="btn add-more">
            Add More Orders
          </Link>
        </>
      ) : (
        <div className="no-orders">
          <p>You haven&apos;t placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      )}
    </div>
  );
};

export default Orders;