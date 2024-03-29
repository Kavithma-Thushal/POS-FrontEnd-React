import { useState, useEffect } from "react";
import axios from "axios";
import { successAlert, errorAlert, emptyMessage } from '../util/Alert';

export function CustomerController() {

    let baseUrl = "http://localhost:8080/spring_pos/";

    useEffect(() => {
        loadAllCustomers();
    }, []);

    const handleChange = (e) => {
        setCustomerData({ ...customerData, [e.target.id]: e.target.value });
    };

    const [customerData, setCustomerData] = useState({
        id: '',
        name: '',
        address: '',
        salary: ''
    });

    const [searchCusById, setSearchCusById] = useState('');
    const [allCustomers, setAllCustomers] = useState([]);
    const [disableEnable, setDisableEnable] = useState(false);

    const saveCustomer = () => {
        axios.post(baseUrl + 'customer', customerData)
            .then((resp) => {
                successAlert("Customer", resp.data.message);
                loadAllCustomers();
            })
            .catch((error) => {
                errorAlert("Customer", error.message);
            });
    };

    const updateCustomer = () => {
        axios.put(baseUrl + 'customer', customerData)
            .then((resp) => {
                successAlert("Customer", resp.data.message);
                loadAllCustomers();
            })
            .catch((error) => {
                errorAlert("Customer", error.message);
            });
    };

    const deleteCustomer = () => {
        axios.delete(baseUrl + 'customer/' + customerData.id)
            .then((resp) => {
                successAlert("Customer", resp.data.message);
                loadAllCustomers();
            })
            .catch((error) => {
                errorAlert("Customer", error.message);
            });
    };

    const searchCustomer = () => {
        axios.get(baseUrl + 'customer/searchCustomer/' + searchCusById)
            .then((resp) => {
                setAllCustomers([]);
                setAllCustomers([{
                    id: resp.data.id,
                    name: resp.data.name,
                    address: resp.data.address,
                    salary: resp.data.salary
                }]);
                clearInputFields();
            })
            .catch((error) => {
                emptyMessage(error.message);
                loadAllCustomers();
            });
    };

    const loadAllCustomers = () => {
        axios.get(baseUrl + 'customer/loadAllCustomers')
            .then((resp) => {
                setAllCustomers(resp.data.data);
                generateCustomerId();
            })
            .catch((error) => {
                console.log("Load All Customers Error : " + error);
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
                console.log("Generate Customer Id Error : ", error);
            });
    };

    const tableListener = (id, name, address, salary) => {
        setCustomerData({ id, name, address, salary });
    };

    const clearInputFields = () => {
        setCustomerData({
            name: '',
            address: '',
            salary: ''
        });
        setSearchCusById('');
        setDisableEnable(true);
    }

    return {
        handleChange,
        customerData,
        saveCustomer,
        updateCustomer,
        deleteCustomer,

        searchCusById,
        setSearchCusById,
        searchCustomer,
        allCustomers,
        loadAllCustomers,
        tableListener,
        disableEnable,
        clearInputFields
    };
}
