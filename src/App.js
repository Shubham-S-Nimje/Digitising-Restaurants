import { useState } from 'react';
import Contextdata from './Components/Context/Context';
import Displaydata from './Components/Displaydata';
import Formdata from './Components/Formdata';

function App() {
  const [orders, Setorders] = useState([]);

  const addorders = (neworderid, newprice, newordereddish, newselectedTable) => {
      Setorders((neworderadded) => {
        return [...neworderadded, {orderid : neworderid,
          price : newprice,
          ordereddish : newordereddish,
          selectedTable : newselectedTable}];
      });
    }

    const delorder =(orderid)=>{
      console.log(orderid)

      const filterorders = orders.filter((element,index) => {
        return element.orderid !== orderid
      })
      Setorders(filterorders)
      localStorage.removeItem(orderid)
    }
  return (
      <Contextdata.Provider value={{orders,addorders,delorder}}>
        <div>
        <Formdata />
        <Displaydata />
        </div>
      </Contextdata.Provider>
  );
}

export default App;
