import { useState } from "react";
import axios from "axios";

let baseUrl = "http://localhost:8080/spring_pos/";

export function CustomerController() {

    const [customerData, setCustomerData] = useState('');
    const [searchCusId, setSearchCusId] = useState('');

    const handleChange = (e) => {
        setCustomerData({ ...customerData, [e.target.id]: e.target.value });
    };

    const saveCustomer = () => {
        axios.post(baseUrl + 'customer', customerData)
            .then((resp) => {
                alert("Customer Saved Successfully...!");
            })
            .catch((error) => {
                alert("Customer Saved Error...!");
            });
    };

    const updateCustomer = () => {
        axios.put(baseUrl + 'customer', customerData)
            .then((resp) => {
                alert("Customer Updated Successfully...!");
            })
            .catch((error) => {
                alert("Customer Updated Error...!");
            });
    };

    const deleteCustomer = () => {
        axios.delete(baseUrl + 'customer/' + customerData.id)
            .then((resp) => {
                alert("Customer Deleted Successfully...!");
            })
            .catch((error) => {
                alert("Customer Deleted Error...!");
            });
    };

    const searchCustomer = () => {
        axios.get(baseUrl + `customer/searchCusId?id=${searchCusId}`)
            .then((resp) => {
                alert("Customer Searched Successfully...!");
                console.log(resp.data);
            })
            .catch((error) => {
                alert("Customer Searched Error...!");
            });
    };

    return {
        customerData,
        handleChange,
        saveCustomer,
        updateCustomer,
        deleteCustomer,
        searchCusId,
        setSearchCusId,
        searchCustomer
    };
}
