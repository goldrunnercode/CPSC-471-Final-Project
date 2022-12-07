import React from 'react';
import axios from 'axios';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
export default class AllOrdersTable extends React.Component {


  state = {
    orders: [],
    
  }
  state2 = {
    columns: [
        { field: 'OrderNo', headerName: 'OrderNo', width: 150 },
        { field: 'MedName', headerName: 'MedName', width: 150 },
        { field: 'EstArrival', headerName: 'EstArrival', width: 150 },
        { field: 'Quantity', headerName: 'Quantity', width: 150 },
        { field: 'Status', headerName: 'Status', width: 150 },
        { field: 'StaffEmail', headerName: 'StaffEmail', width: 250 },
        { field: 'CompanyName', headerName: 'CompanyName', width: 250 },
        { field: 'OPharmacyName', headerName: 'PharmacyName', width: 250 },
      ]
  }
  
  
  componentDidMount() {
    axios.get(`http://localhost:3001/customerordersall/`+localStorage.getItem('user'))
      .then(res => {
        const orders = res.data;
        this.setState({ orders });
      })
  }

  render() {
    return (
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid 
            rows={this.state.orders
                .map(orders =>
                  ({id:orders.OrderNo, OrderNo:orders.OrderNo, MedName:orders.MedName, EstArrival: orders.EstArrival, Quantity:orders.Quantity, Status: orders.Status, StaffEmail:orders.StaffEmail, CompanyName:orders.CompanyName,OPharmacyName:orders.OPharmacyName})
                )} 
            columns={this.state2.columns}
            getRowId={(row) => row.id}
             />
        </div>
  )
}
}