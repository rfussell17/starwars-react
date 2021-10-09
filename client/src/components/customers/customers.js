import React, { Component } from 'react';
import './customers.css';
import axios from 'axios';

class Customers extends Component {
    constructor(){
        super();
        this.state = {
        customers: []
        }      

}

componentDidMount(){
        axios.get('https://swapi.dev/api/people/')
        .then((res) => {
            const person = res.data;
            this.setState({ person })
            console.log(res.data);  
        })
    };
    




  render() {


    return (
        <div>
            <h2>Customers</h2>
            <ul>
                {this.state.customers.map(customer => 
                   <li key={customer.id}> {customer.firstName} {customer.lastName}</li> )}
            </ul>
        </div>      
        );
    }
}

export default Customers;