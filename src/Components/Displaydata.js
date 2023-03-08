import React, { useContext } from 'react'
import Contextdata from './Context/Context';

const Displaydata = () => {
    const {orders} = useContext(Contextdata);
    const {delorder} = useContext(Contextdata);


  return (
    <div>
      {orders.map(order => (
        <div key = {order.orderid}>
        orderid:{order.orderid}
        price:{order.price}
        ordereddish:{order.ordereddish}
        selectedTable:{order.selectedTable}
        <button onClick={() =>delorder(order.orderid)}>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default Displaydata;
