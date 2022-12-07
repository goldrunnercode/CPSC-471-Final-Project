import React from 'react'
import axios from 'axios'
import AllOrdersTable from '../Components/AllOrdersTable.js';

function StaffOnly() {
  // axios.get(`http://localhost:3001/staffemailexists/`+localStorage.getItem('user'))
  // .then(res => {
  //   const exists = res.data;
  //   if (exists) {
  //     if(window.location.href !=='/staffonly'){
  //     window.location.href = '/staffonly'
  //     }
  //   } else {
  //     window.location.href = '/'
  //   }
  // })
  return (
    <div>
      <AllOrdersTable />
    </div> 
  )
}
export default StaffOnly