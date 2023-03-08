import React, { useState, useContext, useEffect } from 'react'
import Contextdata from './Context/Context'

const Formdata = () => {
    const [orderid, Setorderid] = useState('')
    const [price, Setprice] = useState('')
    const [ordereddish, Setordereddish] = useState('')
    const [selectedTable, SetselectedTable] = useState('Table1')
    const {orders} = useContext(Contextdata);

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
        localStorage.setItem('Table', JSON.stringify(orders))

    }

    // useEffect(() => {
    //     localStorage.setItem(selectedTable, JSON.stringify(orders))
    // },[orders])

  return (
    <form onSubmit={OnSubmitHandler}>
      <label> Choose Id : </label>
      <input type='number' 
      value={orderid} 
      onChange={OnOrderIdChangeHandler}></input><br />

      <label> Choose Price : </label>
      <input type='number' 
      value={price}
      onChange={OnPriceChangeHandler}></input><br />

      <label> Choose Dishname : </label>
      <input 
      type='text' 
      value={ordereddish}
      onChange={OnordereddishrChangeHandler}></input><br />

      <div onChange={OntableChangeHandler}
      value={selectedTable}>
      <label
      > ChooseTable : </label>
      <select>
        <option value='Table1'> Table1 </option>
        <option value='Table2'> Table2 </option>
        <option value='Table3'> Table3 </option>
      </select >
      </div><br />
      <button>
        Add Product</button>
    </form>
  )
}

export default Formdata
