import { useState } from 'react';
import Contextdata from './Components/Context/Context';
import Displaydata from './Components/Displaydata';
import Formdata from './Components/Formdata';

const getfromlocal = () => {
  let data = localStorage.getItem('Table')
  if(data){
    return JSON.parse(data)
  }
  else{
    return [];
  }
}

function App() {
  const [orders, Setorders] = useState(getfromlocal());

  const addorders = (neworderid, newprice, newordereddish, newselectedTable) => {
      Setorders((neworderadded) => {
        return [...neworderadded, {orderid : neworderid,
          price : newprice,
          ordereddish : newordereddish,
          selectedTable : newselectedTable}];
      });
    }

    const delorder =(orderid)=>{
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
