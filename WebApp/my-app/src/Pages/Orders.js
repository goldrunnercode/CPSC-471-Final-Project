import React from 'react'


import { DataGrid } from '@mui/x-data-grid';
import OrdersTable from '../Components/OrdersTable.js';
const showOrders = () => {
  
};

function Orders() {
  return (
    <div>
      <OrdersTable />
    </div>
    // <div>
    //   <button onClick={showOrders}>show orders</button>
    // </div>
    
  )
}
export default Orders