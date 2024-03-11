import React, {useState} from 'react';
import axios from 'axios';

function Customer() {
    const [customerData, setCustomerData] = useState({
        id: "",
        name: "",
        address: "",
        salary: ""
    });

    const handleChange = (e) => {
        setCustomerData({
            ...customerData,
            [e.target.id]: e.target.value
        });
    };

    const updateCustomer = () => {
        axios.put('http://localhost:8080/javaee_pos/customer', customerData)
            .then((resp) => {
                console.log("Customer Updated Successfully...!");
            })
            .catch((error) => {
                console.log("Customer Update Error...!");
            });
    };

    return (
        <div>
            <h1>Customer Management</h1>
            <form>
                <input id="id" placeholder="Customer ID" value={customerData.id} onChange={handleChange}/><br/>
                <input id="name" placeholder="Customer Name" value={customerData.name} onChange={handleChange}/><br/>
                <input id="address" placeholder="Customer Address" value={customerData.address}
                       onChange={handleChange}/><br/>
                <input id="salary" placeholder="Customer Salary" value={customerData.salary}
                       onChange={handleChange}/><br/>
                <button id="btnUpdateCustomer" type="button" onClick={updateCustomer}>Update</button>
            </form>
        </div>
    );
}

export default Customer;