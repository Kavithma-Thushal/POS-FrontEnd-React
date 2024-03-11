import {useState} from "react";
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
            ...customerData,
            [e.target.id]: e.target.value
        });
    };

    const updateCustomer = () => {
        axios.put('http://localhost:8080/javaee_pos/customer', customerData)
            .then((resp) => {
                alert("CustomerView Updated Successfully...!");
            })
            .catch((error) => {
                alert("CustomerView Updated Error...!");
            });
    };

    return {
        customerData,
        handleChange,
        updateCustomer
    };
}