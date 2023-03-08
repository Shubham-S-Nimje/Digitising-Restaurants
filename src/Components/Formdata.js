import React, { useState, useContext, useEffect } from 'react'
import Contextdata from './Context/Context'

const Formdata = () => {
    const [orderid, Setorderid] = useState('')
    const [price, Setprice] = useState('')
    const [ordereddish, Setordereddish] = useState('')
    const [selectedTable, SetselectedTable] = useState('food')
    const {orders} = useContext(Contextdata);
    // const [table2, Settable2] = useState('')
    // const [table3, Settable3] = useState('')


    const{addorders} = useContext(Contextdata);

    const OnOrderIdChangeHandler = (event) => {
        Setorderid(event.target.value)
    }
    const OnPriceChangeHandler = (event) => {
        Setprice(event.target.value)
    }
    const OnordereddishrChangeHandler = (event) => {
        Setordereddish(event.target.value)
    }
    const OntableChangeHandler = (event) => {
        SetselectedTable(event.target.value)
        // Settable2(event.target.value)
        // Settable3(event.target.value)
        // console.log(Settable1)
        // console.log(Settable2)
        // console.log(Settable3)
    }

    const OnSubmitHandler = (event) => {
        event.preventDefault();
        console.log(orderid)
        console.log(price)
        console.log(ordereddish)

        addorders(orderid,
            price,
            ordereddish, selectedTable);

        Setorderid('')
        Setprice('')
        Setordereddish('')
        SetselectedTable('food')
    }
    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders))
    },[orders])
  return (
    <form onSubmit={OnSubmitHandler}>
      <label> Product Id : </label>
      <input type='number' 
      value={orderid} 
      onChange={OnOrderIdChangeHandler}></input><br />

      <label> Selling Price : </label>
      <input type='number' 
      value={price}
      onChange={OnPriceChangeHandler}></input><br />

      <label> Product Name : </label>
      <input 
      type='text' 
      value={ordereddish}
      onChange={OnordereddishrChangeHandler}></input><br />

      <div onChange={OntableChangeHandler}
      value={selectedTable}>
      <label
      > Choose Category : </label>
      <select>
        <option value='food'> Food </option>
        <option value='electronics'> Electronics </option>
        <option value='skincare'> Skincare </option>
      </select >
      </div><br />
      <button>
        Add Product</button>
    </form>
  )
}

export default Formdata
