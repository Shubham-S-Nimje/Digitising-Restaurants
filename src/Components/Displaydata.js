import React, { useContext } from 'react'
import Contextdata from './Context/Context';
import Fooddata from './Fooddata';

const Displaydata = () => {
    const {orders} = useContext(Contextdata);
    const {delorder} = useContext(Contextdata);

  return (
    <div>
      {orders.map(order => (
        <ul key = {order.orderid}>
        Rs.{order.price} - {order.ordereddish} - 
        {order.selectedTable} - 
        <button onClick={() =>delorder(order.orderid)}>Remove Product</button>
        </ul>
      ))}
    </div>
  )
}

export default Displaydata;
