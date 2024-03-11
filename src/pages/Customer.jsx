import axios from "axios";
import React from "react";

function Customer() {
    const saveCustomer = () => {
        let formData = new FormData(document.getElementById('customerForm'));

        axios.post('http://localhost:8080/javaee_pos/customer', formData)
            .then((resp) => {
                console.log("Customer Saved Successfully...!");
            })
            .catch((error) => {
                console.log("Customer Saved Error...!");
            });
    };

    return (
        <div>
            <h1>Customer Management</h1>
            <form id="customerForm">
                <input placeholder="Customer Id"/><br/>
                <input placeholder="Customer Name"/><br/>
                <input placeholder="Customer Address"/><br/>
                <input placeholder="Customer Salary"/><br/>
                <button id="btnSaveCustomer" onClick={saveCustomer}>Save</button>
            </form>
        </div>
    );
}

export default Customer;