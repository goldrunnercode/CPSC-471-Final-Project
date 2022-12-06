import React from 'react';
import axios from 'axios';

export default class OrdersTable extends React.Component {
  state = {
    orders: []
  }

  componentDidMount() {
    axios.get(`localhost:3001/customerorders/`+localStorage.get('user'))
      .then(res => {
        const orders = res.data;
        this.setState({ orders });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.orders
            .map(orders =>
              <li key={orders.OrderNo}>{orders.MedName}</li>
            )
        }
      </ul>
    )
  }
}