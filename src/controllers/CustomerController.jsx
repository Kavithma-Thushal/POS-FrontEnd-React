import { useState, useEffect } from "react";
import axios from "axios";

export function CustomerController() {

    let baseUrl = "http://localhost:8080/spring_pos/";

    useEffect(() => {
        loadAllCustomers();
    }, []);

    const [customerData, setCustomerData] = useState({
        id: '',
        name: '',
        address: '',
        salary: ''
    });
    const [searchCusById, setSearchCusById] = useState('');
    const [allCustomers, setAllCustomers] = useState([]);
    const [disableEnable, setDisableEnable] = useState(false);

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
                setDisableEnable(true);
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
                generateCustomerId();
            })
            .catch((error) => {
                alert("Customers Loaded Error...!");
            });
    };

    const generateCustomerId = () => {
        axios.get(baseUrl + 'customer/generateCustomerId')
            .then((resp) => {
                let generatedId = resp.data.value;
                if (generatedId === null) {
                    setCustomerData({ ...customerData, id: "C00-001" });
                } else {
                    let tempId = parseInt(generatedId.split("-")[1]) + 1;
                    if (tempId <= 9) {
                        setCustomerData({ ...customerData, id: "C00-00" + tempId });
                    } else if (tempId <= 99) {
                        setCustomerData({ ...customerData, id: "C00-0" + tempId });
                    } else {
                        setCustomerData({ ...customerData, id: "C00-" + tempId });
                    }
                }
            })
            .catch((error) => {
                alert("Customer Id Generated Error...!");
            });
    };

    const tableListener = (id, name, address, salary) => {
        setCustomerData({ id, name, address, salary });
    };

    const clearInputFields = () => {
        setDisableEnable(true);
        setCustomerData({
            id: '',
            name: '',
            address: '',
            salary: ''
        });
    }

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

        disableEnable,
        tableListener,
        clearInputFields
    };
}
