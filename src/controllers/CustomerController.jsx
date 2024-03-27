import { useState, useEffect } from "react";
import axios from "axios";

export function CustomerController() {

    let baseUrl = "http://localhost:8080/spring_pos/";

    useEffect(() => {
        loadAllCustomers();
    },[]);

    const [customerData, setCustomerData] = useState({
        id: '',
        name: '',
        address: '',
        salary: ''
    });
    const [searchCusById, setSearchCusById] = useState('');
    const [allCustomers, setAllCustomers] = useState([]);

    const handleChange = (e) => {
        setCustomerData({ ...customerData, [e.target.id]: e.target.value });
    };

    const saveCustomer = () => {
        axios.post(baseUrl + 'customer', customerData)
            .then((resp) => {
                alert("Customer Saved Successfully...!");
                loadAllCustomers();
            })
            .catch((error) => {
                alert("Customer Saved Error...!");
            });
    };

    const updateCustomer = () => {
        axios.put(baseUrl + 'customer', customerData)
            .then((resp) => {
                alert("Customer Updated Successfully...!");
                loadAllCustomers();
            })
            .catch((error) => {
                alert("Customer Updated Error...!");
            });
    };

    const deleteCustomer = () => {
        axios.delete(baseUrl + 'customer/' + customerData.id)
            .then((resp) => {
                alert("Customer Deleted Successfully...!");
                loadAllCustomers();
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

    const loadAllCustomers = () => {
        axios.get(baseUrl + 'customer/loadAllCustomers')
            .then((resp) => {
                setAllCustomers(resp.data.data);
            })
            .catch((error) => {
                alert("Customers Loaded Error...!");
            });
    };

    const generateCustomerId = () => {
        axios.get(baseUrl + 'customer/generateCustomerId')
            .then((resp) => {
                alert("Customer Id Generated Successfully...!");
                console.log(resp.data.value);
            })
            .catch((error) => {
                alert("Customer Id Generated Error...!");
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
        searchCustomer,

        allCustomers,
        loadAllCustomers,

        generateCustomerId
    };
}
