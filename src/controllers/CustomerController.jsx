import { useState } from "react";
import axios from "axios";

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
        axios.put('http://localhost:8080/spring_pos/customer', customerData)
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

    return {
        customerData,
        handleChange,
        updateCustomer
    };
}
