import React from 'react'
import axios from 'axios'
import AllOrdersTable from '../Components/AllOrdersTable.js';

function StaffOnly() {
// if(localStorage.getItem('staff')!==true){
//   window.location.href = '/'
// }
  return (
    <div>
      <AllOrdersTable />
    </div> 
  )
}
export default StaffOnly