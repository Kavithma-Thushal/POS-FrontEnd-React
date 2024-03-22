import { useState } from "react";
import axios from "axios";

let baseUrl = "http://localhost:8080/spring_pos/";

export function CustomerController() {

    const [customerData, setCustomerData] = useState('');
    const [searchCusById, setSearchCusById] = useState('');

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
        axios.get(baseUrl + 'customer/searchCustomer/' + searchCusById)
            .then((resp) => {
                alert(resp.data.id + " - " + resp.data.name + " - " + resp.data.address + " - " + resp.data.salary);
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

        searchCusById,
        setSearchCusById,
        searchCustomer
    };
}
