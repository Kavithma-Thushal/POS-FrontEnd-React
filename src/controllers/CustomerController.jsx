import { useState } from "react";
import axios from "axios";

let baseUrl = "http://localhost:8080/spring_pos/";

export function CustomerController() {
    const [customerData, setCustomerData] = useState({
        id: "",
        name: "",
        address: "",
        salary: ""
    });

    const handleChange = (e) => {
        setCustomerData({
            ...customerData, [e.target.id]: e.target.value
        });
    };

    const updateCustomer = () => {
        axios.put(baseUrl + 'customer', customerData)
            .then((resp) => {
                alert("Customer Updated Successfully...!");
                setCustomerData({
                    id: "",
                    name: "",
                    address: "",
                    salary: ""
                });
            })
            .catch((error) => {
                alert("Customer Updated Error...!");
            });
    };

    const deleteCustomer = () => {
        axios.delete(baseUrl + 'customer/' + customerData.id)
            .then((resp) => {
                alert("Customer Deleted Successfully...!");
                setCustomerData({
                    id: "",
                    name: "",
                    address: "",
                    salary: ""
                });
            })
            .catch((error) => {
                alert("Customer Deleted Error...!");
            });
    };

    return {
        customerData,
        handleChange,
        updateCustomer,
        deleteCustomer
    };
}
