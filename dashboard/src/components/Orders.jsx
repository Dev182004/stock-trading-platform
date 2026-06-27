import { useState, useEffect } from "react";
import api from "../Services/api";

const Orders = () => {
  let [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    api
      .get("/orders/allOrders")
      .then((res) => {
        console.log(res.data);
        setAllOrders(res.data);
      })
      .catch((err) => console.error("Orders load failed:", err));
  }, []);

  return (
    <div className="orders">
      {allOrders.length > 0 ? (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>
            </thead>

            <tbody>
              {allOrders.map((order, index) => {
                return (
                  <tr key={index}>
                    <td>{order.name}</td>
                    <td>{order.qty}</td>
                    <td>{order.price}</td>
                    <td>{order.mode}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
        </div>
      )}
    </div>
  );
};

export default Orders;
