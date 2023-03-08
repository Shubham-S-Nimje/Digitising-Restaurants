import React, { useContext } from 'react'
import Contextdata from './Context/Context';

const Table1 = () => {
  const {orders} = useContext(Contextdata);
  const {delorder} = useContext(Contextdata);


  return (
    <div>
      <h1> Table1 : </h1>
      { orders.map(order => {
        if(order.selectedTable ==='Table1'){
          return(
        <ul key = {order.orderid}>
        Rs.{order.price} - {order.ordereddish} - 
        {order.selectedTable} - 
        <button onClick={() =>delorder(order.orderid)}>Remove Product</button>
        </ul>)
        }
        else{
          return [];
        }
        })}
    </div>
  )
}

export default Table1;
