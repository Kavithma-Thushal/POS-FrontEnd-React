import {useState} from "react";
import axios from "axios";

export function useCustomerController() {
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
                alert("Customer Updated Successfully...!");
            })
            .catch((error) => {
                alert("Customer Updated Error...!");
            });
    };

    // Return state and functions to be used by components
    return {
        customerData,
        handleChange,
        updateCustomer
    };
}