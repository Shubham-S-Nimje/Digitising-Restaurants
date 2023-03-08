import React, { useState, useContext } from 'react'
import Contextdata from './Context/Context'

const Formdata = () => {
    const [orderid, Setorderid] = useState('')
    const [price, Setprice] = useState('')
    const [ordereddish, Setordereddish] = useState('')
    const [selectedTable, SetselectedTable] = useState('table1')
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
        

        const obj = {
            orderid,
            price,
            ordereddish,
            selectedTable
        }

        console.log(selectedTable)

        addorders(orderid,
            price,
            ordereddish, selectedTable);

        localStorage.setItem(obj.orderid, JSON.stringify(obj))

    }
  return (
    <form onSubmit={OnSubmitHandler}>
      <label> Unique order Id : </label>
      <input type='number' 
      value={orderid} 
      onChange={OnOrderIdChangeHandler}></input><br />

      <label> Choose Price : </label>
      <input type='number' 
      value={price}
      onChange={OnPriceChangeHandler}></input><br />

      <label> Choose Dish : </label>
      <input 
      type='text' 
      value={ordereddish}
      onChange={OnordereddishrChangeHandler}></input><br />

      <div onChange={OntableChangeHandler}
      value={selectedTable}>
      <label
      > Choose Table No : </label>
      <select>
        <option value='table1'> Table No 1 : </option>
        <option value='table2'> Table No 2 : </option>
        <option value='table3'> Table No 3 : </option>
      </select >
      </div><br />
      <button>
        Submit</button>
    </form>
  )
}

export default Formdata
